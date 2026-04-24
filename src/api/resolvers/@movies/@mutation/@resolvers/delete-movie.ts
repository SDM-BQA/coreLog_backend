import { get_auth_user } from "../../../../../utils/auth.utils";
import { movie_model } from "../../../../models/@movies";

export const delete_movie = async (_parent: any, args: { id: string }, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);
        const result = await movie_model.deleteOne({ _id: args.id, user_id: user._id });
        return result.deletedCount > 0;
    } catch (error: any) {
        console.error("Delete Movie Error:", error.message);
        throw new Error(error.message);
    }
};
