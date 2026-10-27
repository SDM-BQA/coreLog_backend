import { get_auth_user } from "../../../../../utils/auth.utils";
import { send_inner_circle_otp_email } from "../../../../../utils/email";

const OTP_MINUTES = 10;

export const send_inner_circle_otp = async (
    _parent: any,
    { email }: { email: string },
    ctx: any
) => {
    try {
        const user = await get_auth_user(ctx.req);
        const normalizedEmail = email.trim().toLowerCase();

        if (!normalizedEmail) {
            throw new Error("Email is required");
        }

        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const expiresAt = new Date(Date.now() + OTP_MINUTES * 60 * 1000);

        user.inner_circle_email = normalizedEmail;
        user.inner_circle_otp_code = otp;
        user.inner_circle_otp_expires_at = expiresAt;
        await user.save();

        const sent = await send_inner_circle_otp_email(normalizedEmail, otp);
        if (!sent) {
            throw new Error("Failed to send OTP");
        }

        return true;
    } catch (error: any) {
        console.error("send_inner_circle_otp error:", error);
        throw new Error(error.message || "Failed to send OTP");
    }
};
