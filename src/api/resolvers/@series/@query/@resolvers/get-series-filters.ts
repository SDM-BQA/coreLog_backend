import { get_auth_user } from "../../../../../utils/auth.utils";
import { series_model } from "../../../../models/@series/series";

export const get_series_filters = async (_parent: any, _args: any, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);
        
        const [genres, statuses, creators, platforms] = await Promise.all([
            series_model.distinct("genres", { user_id: user._id }),
            series_model.distinct("status", { user_id: user._id }),
            series_model.distinct("creator", { user_id: user._id }),
            series_model.distinct("platform", { user_id: user._id }),
        ]);

        return {
            genres: genres.sort(),
            statuses: statuses.sort(),
            creators: creators.sort(),
            platforms: platforms.filter(Boolean).sort(),
        };
    } catch (error: any) {
        console.error("Get Series Filters Error:", error.message);
        return { genres: [], statuses: [], creators: [], platforms: [] };
    }
};
