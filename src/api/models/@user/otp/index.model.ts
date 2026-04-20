import { model, Schema, Document } from "mongoose";

interface IOTP extends Document {
    email: string;
    otp: string;
    createdAt: Date;
}

const otpSchema = new Schema<IOTP>({
    email: { type: String, required: true },
    otp: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, index: { expires: 600 } } // Expires in 10 minutes (600 seconds)
});

export const otp_model = model<IOTP>("OTP", otpSchema);
