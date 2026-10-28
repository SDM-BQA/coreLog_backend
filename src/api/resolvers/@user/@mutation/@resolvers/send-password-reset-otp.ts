import { user_model } from "../../../../models/@user";
import { password_reset_model } from "../../../../models/@user/password-reset/index.model";
import { send_password_reset_email } from "../../../../../utils/email";

const RESEND_COOLDOWN_MS = 60 * 1000;

// Always resolves to true so the response never reveals whether an email is registered
export const send_password_reset_otp = async (_parent: any, { email }: { email: string }) => {
    try {
        const user = await user_model.findOne({ email_id: email });
        if (!user) return true;

        const existing = await password_reset_model.findOne({ email });
        if (existing && Date.now() - existing.createdAt.getTime() < RESEND_COOLDOWN_MS) {
            return true;
        }

        const otp = Math.floor(100000 + Math.random() * 900000).toString();

        await password_reset_model.findOneAndUpdate(
            { email },
            { otp, attempts: 0, createdAt: new Date() },
            { upsert: true, new: true }
        );

        await send_password_reset_email(email, otp);
        return true;
    } catch (error) {
        console.error("send_password_reset_otp error:", error);
        return true;
    }
};
