import { get_auth_user } from "../../../../../utils/auth.utils";

export const cancel_inner_circle_membership = async (
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

        user.plan = "free";
        user.inner_circle_otp_code = undefined;
        user.inner_circle_otp_expires_at = undefined;
        user.inner_circle_started_at = undefined;
        user.inner_circle_expires_at = undefined;
        await user.save();

        return {
            plan: "free",
            is_active: false,
            started_at: null,
            expires_at: null,
            days_left: 0,
            renewal_cycle: "monthly",
            email: user.inner_circle_email || null,
        };
    } catch (error: any) {
        console.error("cancel_inner_circle_membership error:", error);
        throw new Error(error.message || "Failed to cancel Inner Circle membership");
    }
};
