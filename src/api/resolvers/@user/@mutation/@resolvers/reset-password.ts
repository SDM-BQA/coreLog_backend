import { user_model } from "../../../../models/@user";
import { password_reset_model } from "../../../../models/@user/password-reset/index.model";

const MAX_ATTEMPTS = 5;
const STRONG_PASSWORD =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()_\-+=])[A-Za-z\d@$!%*?&#^()_\-+=]{8,}$/;
const INVALID_CODE = "Invalid or expired code";

export const reset_password = async (
    _parent: any,
    { email, otp, new_password }: { email: string; otp: string; new_password: string }
) => {
    if (!STRONG_PASSWORD.test(new_password)) {
        throw new Error("Password must contain 8+ characters, uppercase, lowercase, number and special character");
    }

    const record = await password_reset_model.findOne({ email });
    if (!record) throw new Error(INVALID_CODE);

    if (record.otp !== otp) {
        record.attempts += 1;
        if (record.attempts >= MAX_ATTEMPTS) {
            await password_reset_model.deleteOne({ _id: record._id });
        } else {
            await record.save();
        }
        throw new Error(INVALID_CODE);
    }

    const user = await user_model.findOne({ email_id: email });
    if (!user) throw new Error(INVALID_CODE);

    // The pre-save hook hashes the new password
    user.password = new_password;
    await user.save();

    await password_reset_model.deleteOne({ _id: record._id });
    return true;
};
