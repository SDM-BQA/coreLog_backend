import { get_auth_user } from "../../../../../utils/auth.utils";
import { series_model } from "../../../../models/@series/series";

export const create_series = async (_parent: any, args: { input: any }, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);
        const series = await series_model.create({
            ...args.input,
            user_id: user._id,
        });
        return series;
    } catch (error: any) {
        console.error("Create Series Error:", error.message);
        throw new Error(error.message);
    }
};
