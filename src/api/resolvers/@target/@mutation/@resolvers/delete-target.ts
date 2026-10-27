import { get_auth_user } from "../../../../../utils/auth.utils";
import { target_model } from "../../../../models/@target";

export const delete_target = async (_parent: any, args: { id: string }, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);
        const result = await target_model.findOneAndDelete({ _id: args.id, user_id: user._id });
        return !!result;
    } catch (error: any) {
        console.error("Delete Target Error:", error.message);
        throw new Error(error.message);
    }
};
