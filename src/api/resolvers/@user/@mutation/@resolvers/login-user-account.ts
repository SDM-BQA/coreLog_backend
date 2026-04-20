import { user_model } from "../../../../models/@user";
import { Encryption } from "../../../../../utils/misc/encryption.utils";
import { sign_access_token, sign_refresh_token } from "../../../../../utils/jwt.utils";

export const login_user_account = async (
    _parent: any,
    { email_id, password }: any
) => {
    try {
        // 1. Find user by email
        const user = await user_model.findOne({ email_id });
        if (!user) {
            throw new Error("User not found");
        }

        // 2. Verify password
        const isMatch = await Encryption.verify_password(password, user.password);
        if (!isMatch) {
            throw new Error("Invalid credentials");
        }

        // 3. Generate tokens
        const payload = { userId: user._id.toString() };
        const accessToken = sign_access_token(payload);
        const refreshToken = sign_refresh_token(payload);

        return {
            accessToken,
            refreshToken,
            user,
        };
    } catch (error: any) {
        throw new Error(error.message || "Failed to login");
    }
};
