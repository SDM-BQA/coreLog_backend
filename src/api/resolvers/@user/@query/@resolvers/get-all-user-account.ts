import { user_model } from "../../../../models/@user";

export const get_all_user_accounts = async (_parent: any, _args: any, _ctx: any) => {
    try {
        const users = await user_model.find()
        return users
    } catch (error) {
        console.error(error)
        return null
    }
};