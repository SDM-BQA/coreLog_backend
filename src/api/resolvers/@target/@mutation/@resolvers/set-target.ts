import { get_auth_user } from "../../../../../utils/auth.utils";
import { target_model } from "../../../../models/@target";

interface TargetInput {
    year: number;
    movies?: number;
    series?: number;
    books?: number;
    poems?: number;
}

export const set_target = async (_parent: any, args: { input: TargetInput }, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);
        const { year, movies, series, books, poems } = args.input;

        const target = await target_model.findOneAndUpdate(
            { user_id: user._id, year },
            { $set: { movies, series, books, poems, user_id: user._id, year } },
            { upsert: true, new: true }
        );
        return target;
    } catch (error: any) {
        console.error("Set Target Error:", error.message);
        throw new Error(error.message);
    }
};
