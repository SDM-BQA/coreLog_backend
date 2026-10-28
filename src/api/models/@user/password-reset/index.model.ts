import { model, Schema, Document } from "mongoose";

interface IPasswordReset extends Document {
    email: string;
    otp: string;
    attempts: number;
    createdAt: Date;
}

const passwordResetSchema = new Schema<IPasswordReset>({
    email: { type: String, required: true, unique: true },
    otp: { type: String, required: true },
    // Wrong guesses so far; the code is discarded after too many
    attempts: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now, index: { expires: 600 } } // Expires in 10 minutes
});

export const password_reset_model = model<IPasswordReset>("PasswordReset", passwordResetSchema);
