import { get_auth_user } from "../../../../../utils/auth.utils";
import { movie_model } from "../../../../models/@movies";

export const create_movie = async (_parent: any, args: { input: any }, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);

        // Check for duplicates (case-insensitive title for the same user)
        const existing = await movie_model.findOne({
            user_id: user._id,
            title: { $regex: new RegExp(`^${args.input.title}$`, "i") },
        });

        if (existing) {
            throw new Error(`Movie "${args.input.title}" is already in your collection.`);
        }

        const movie = await movie_model.create({
            ...args.input,
            user_id: user._id,
        });
        return movie;
    } catch (error: any) {
        console.error("Create Movie Error:", error.message);
        throw new Error(error.message);
    }
};
