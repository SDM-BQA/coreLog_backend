import { user_model } from "../../../../models/@user";

export const get_user_account = async (_parent: any, args: any, _ctx: any) => {
    const { id } = args;

    try {
        const user = await user_model.findById(id);
        if (!user) {
            throw new Error("User not found");
        }
        return user;
    } catch (error) {
        console.error(error)
        return null
    }
};