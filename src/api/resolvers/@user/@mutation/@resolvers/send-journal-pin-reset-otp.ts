import { otp_model } from "../../../../models/@user/otp/index.model";
import { send_journal_pin_reset_email } from "../../../../../utils/email";

export const send_journal_pin_reset_otp = async (_parent: any, { email }: { email: string }) => {
    try {
        const otp = Math.floor(100000 + Math.random() * 900000).toString();

        await otp_model.findOneAndUpdate(
            { email },
            { otp, createdAt: new Date() },
            { upsert: true, new: true }
        );

        const sent = await send_journal_pin_reset_email(email, otp);
        return sent;
    } catch (error) {
        console.error("send_journal_pin_reset_otp error:", error);
        return false;
    }
};
