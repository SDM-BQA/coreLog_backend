import { get_auth_user } from "../../../../../utils/auth.utils";
import { movie_model } from "../../../../models/@movies/movie";

export const get_movie_filters = async (_parent: any, _args: any, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);
        
        const [genres, statuses, directors] = await Promise.all([
            movie_model.distinct("genres", { user_id: user._id }),
            movie_model.distinct("status", { user_id: user._id }),
            movie_model.distinct("director", { user_id: user._id }),
        ]);

        return {
            genres: genres.sort(),
            statuses: statuses.sort(),
            directors: directors.sort(),
        };
    } catch (error: any) {
        console.error("Get Movie Filters Error:", error.message);
        return { genres: [], statuses: [], directors: [] };
    }
};
