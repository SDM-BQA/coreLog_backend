import { user_model } from "../../../../models/@user";
import { Encryption } from "../../../../../utils/misc/encryption.utils";
import { sign_access_token, sign_refresh_token } from "../../../../../utils/jwt.utils";

export const login_user_account = async (
    _parent: any,
    { email_id, password, keep_signed_in }: any
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
        // "Keep me signed in" issues long-lived tokens; otherwise short-lived session tokens
        const accessToken = sign_access_token(payload, keep_signed_in ? "30d" : "1d");
        const refreshToken = sign_refresh_token(payload, keep_signed_in ? "90d" : "7d");

        return {
            accessToken,
            refreshToken,
            user,
        };
    } catch (error: any) {
        throw new Error(error.message || "Failed to login");
    }
};
