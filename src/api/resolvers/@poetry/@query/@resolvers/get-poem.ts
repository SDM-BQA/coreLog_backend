import { get_auth_user } from "../../../../../utils/auth.utils";
import { poem_model } from "../../../../models/@poetry";

export const get_poem = async (_parent: any, args: { id: string }, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);
        const poem = await poem_model.findOne({ _id: args.id, user_id: user._id });
        return poem;
    } catch (error: any) {
        console.error("Get Poem Error:", error.message);
        return null;
    }
};
