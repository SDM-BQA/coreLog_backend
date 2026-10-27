import { get_auth_user } from "../../../../../utils/auth.utils";
import { poem_model } from "../../../../models/@poetry";

export const delete_poem = async (_parent: any, args: { id: string }, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);
        const result = await poem_model.deleteOne({ _id: args.id, user_id: user._id });
        return result.deletedCount > 0;
    } catch (error: any) {
        console.error("Delete Poem Error:", error.message);
        throw new Error(error.message);
    }
};
