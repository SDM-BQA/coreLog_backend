import { user_model } from "../../../../models/@user";

export const check_username_exists = async (_parent: any, { username }: { username: string }) => {
    try {
        const user = await user_model.findOne({ user_name: username });
        return !!user;
    } catch (error) {
        console.error("check_username_exists error:", error);
        return false;
    }
};
