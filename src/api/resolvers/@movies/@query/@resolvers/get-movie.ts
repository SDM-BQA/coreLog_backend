import { get_auth_user } from "../../../../../utils/auth.utils";
import { movie_model } from "../../../../models/@movies/movie";

export const get_movie = async (_parent: any, args: { id: string }, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);
        const movie = await movie_model.findOne({ _id: args.id, user_id: user._id });
        return movie;
    } catch (error: any) {
        console.error("Get Movie Error:", error.message);
        return null;
    }
};
