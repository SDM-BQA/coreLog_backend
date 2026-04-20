import { user_model } from "../../../../models/@user";

export const check_email_exists = async (_parent: any, { email }: { email: string }) => {
    try {
        const user = await user_model.findOne({ email_id: email });
        return !!user;
    } catch (error) {
        console.error("check_email_exists error:", error);
        return false;
    }
};
