import { verify_access_token } from "./jwt.utils";
import { user_model } from "../api/models/@user";

export const get_auth_user = async (req: any) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new Error("Authentication required");
    }

    const token = authHeader.split(" ")[1];
    const decoded = verify_access_token(token);
    if (!decoded || !decoded.userId) {
        throw new Error("Invalid or expired token");
    }

    const user = await user_model.findById(decoded.userId);
    if (!user) {
        throw new Error("User not found");
    }

    return user;
};
