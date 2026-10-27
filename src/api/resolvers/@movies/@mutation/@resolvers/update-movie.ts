import { get_auth_user } from "../../../../../utils/auth.utils";
import { movie_model } from "../../../../models/@movies";

export const update_movie = async (_parent: any, args: { id: string, input: any }, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);
        const movie = await movie_model.findOneAndUpdate(
            { _id: args.id, user_id: user._id },
            { $set: args.input },
            { new: true }
        );
        return movie;
    } catch (error: any) {
        console.error("Update Movie Error:", error.message);
        throw new Error(error.message);
    }
};
