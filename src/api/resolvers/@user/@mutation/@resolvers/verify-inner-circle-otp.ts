import { get_auth_user } from "../../../../../utils/auth.utils";

const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;

const build_status = (user: any) => {
    const now = new Date();
    const expiresAt = user.inner_circle_expires_at ? new Date(user.inner_circle_expires_at) : null;
    const startedAt = user.inner_circle_started_at ? new Date(user.inner_circle_started_at) : null;
    const isActive = user.plan === "inner_circle" && !!expiresAt && expiresAt.getTime() > now.getTime();
    const daysLeft = isActive && expiresAt ? Math.max(0, Math.ceil((expiresAt.getTime() - now.getTime()) / (24 * 60 * 60 * 1000))) : 0;

    return {
        plan: isActive ? "inner_circle" : "free",
        is_active: isActive,
        started_at: startedAt ? startedAt.toISOString() : null,
        expires_at: expiresAt ? expiresAt.toISOString() : null,
        days_left: daysLeft,
        renewal_cycle: "monthly",
        email: user.inner_circle_email || null,
    };
};

export const verify_inner_circle_otp = async (
    _parent: any,
    { email, otp }: { email: string; otp: string },
    ctx: any
) => {
    try {
        const user = await get_auth_user(ctx.req);
        const normalizedEmail = email.trim().toLowerCase();

        if (!user.inner_circle_otp_code || !user.inner_circle_otp_expires_at) {
            throw new Error("No OTP request found");
        }

        if (user.inner_circle_email !== normalizedEmail) {
            throw new Error("Email does not match OTP request");
        }

        if (user.inner_circle_otp_code !== otp.trim()) {
            throw new Error("Invalid OTP");
        }

        if (new Date(user.inner_circle_otp_expires_at).getTime() < Date.now()) {
            throw new Error("OTP expired");
        }

        const now = new Date();
        const currentExpiry = user.inner_circle_expires_at ? new Date(user.inner_circle_expires_at) : null;
        const isActive = user.plan === "inner_circle" && !!currentExpiry && currentExpiry.getTime() > now.getTime();

        user.plan = "inner_circle";
        user.inner_circle_started_at = isActive && user.inner_circle_started_at ? user.inner_circle_started_at : now;
        user.inner_circle_expires_at = isActive && currentExpiry
            ? new Date(currentExpiry.getTime() + THIRTY_DAYS_MS)
            : new Date(now.getTime() + THIRTY_DAYS_MS);

        user.inner_circle_otp_code = undefined;
        user.inner_circle_otp_expires_at = undefined;
        await user.save();

        return build_status(user);
    } catch (error: any) {
        console.error("verify_inner_circle_otp error:", error);
        throw new Error(error.message || "Failed to verify OTP");
    }
};
