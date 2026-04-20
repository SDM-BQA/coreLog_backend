import { otp_model } from "../../../../models/@user/otp/index.model";
import { send_otp_email } from "../../../../../utils/email";

export const send_otp = async (_parent: any, { email }: { email: string }) => {
    try {
        // 1. Generate a random 6-digit OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString();

        // 2. Save to DB (overwrite if already exists for this email)
        await otp_model.findOneAndUpdate(
            { email },
            { otp, createdAt: new Date() },
            { upsert: true, new: true }
        );

        // 3. Send Email
        const sent = await send_otp_email(email, otp);
        return sent;
    } catch (error) {
        console.error("send_otp error:", error);
        return false;
    }
};
