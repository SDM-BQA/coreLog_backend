import { get_auth_user } from "../../../../../utils/auth.utils";
import { poem_model } from "../../../../models/@poetry";

export const create_poem = async (_parent: any, args: { input: any }, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);

        // Check for duplicates (case-insensitive title for the same user)
        const existing = await poem_model.findOne({
            user_id: user._id,
            title: { $regex: new RegExp(`^${args.input.title}$`, "i") },
        });

        if (existing) {
            throw new Error(`Poem "${args.input.title}" already exists in your collection.`);
        }

        const poem = await poem_model.create({
            ...args.input,
            user_id: user._id,
        });
        return poem;
    } catch (error: any) {
        console.error("Create Poem Error:", error.message);
        throw new Error(error.message);
    }
};
