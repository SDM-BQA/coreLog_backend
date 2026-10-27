import { get_auth_user } from "../../../../../utils/auth.utils";
import { series_model } from "../../../../models/@series/series";

export const get_series = async (_parent: any, args: { id: string }, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);
        const series = await series_model.findOne({ _id: args.id, user_id: user._id });
        return series;
    } catch (error: any) {
        console.error("Get Series Error:", error.message);
        return null;
    }
};
