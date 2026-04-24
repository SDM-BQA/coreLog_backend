import { get_auth_user } from "../../../../../utils/auth.utils";
import { series_model } from "../../../../models/@series/series";

export const update_series = async (_parent: any, args: { id: string, input: any }, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);
        const series = await series_model.findOneAndUpdate(
            { _id: args.id, user_id: user._id },
            { $set: args.input },
            { new: true }
        );
        return series;
    } catch (error: any) {
        console.error("Update Series Error:", error.message);
        throw new Error(error.message);
    }
};
