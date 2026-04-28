import { get_auth_user } from "../../../../../utils/auth.utils";
import { journal_model } from "../../../../models/@journal/journal";

export const create_journal = async (_parent: any, args: { input: any }, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);

        const journal = await journal_model.create({
            ...args.input,
            photos: args.input.photos ?? [],
            tags: args.input.tags ?? [],
            is_favorite: args.input.is_favorite ?? false,
            user_id: user._id,
        });
        return journal;
    } catch (error: any) {
        console.error("Create Journal Error:", error.message);
        throw new Error(error.message);
    }
};
