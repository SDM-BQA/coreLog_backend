import { get_auth_user } from "../../../../../utils/auth.utils";
import { series_model } from "../../../../models/@series/series";

export const update_series = async (_parent: any, args: { id: string, input: any }, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);
        const nextInput = { ...args.input };
        const updateOps: any = { $set: nextInput };

        if (nextInput.status === "watchlist") {
            delete updateOps.$set.started_from;
            delete updateOps.$set.finished_on;
            updateOps.$unset = {
                started_from: 1,
                finished_on: 1,
            };
        }

        const series = await series_model.findOneAndUpdate(
            { _id: args.id, user_id: user._id },
            updateOps,
            { new: true }
        );
        return series;
    } catch (error: any) {
        console.error("Update Series Error:", error.message);
        throw new Error(error.message);
    }
};
