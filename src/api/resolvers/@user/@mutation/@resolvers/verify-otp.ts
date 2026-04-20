import { otp_model } from "../../../../models/@user/otp/index.model";

export const verify_otp = async (_parent: any, { email, otp }: { email: string; otp: string }) => {
    try {
        const record = await otp_model.findOne({ email, otp });

        if (!record) {
            return false;
        }

        // Successfully verified, delete the OTP record
        await otp_model.deleteOne({ _id: record._id });
        return true;
    } catch (error) {
        console.error("verify_otp error:", error);
        return false;
    }
};
