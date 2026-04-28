import { get_auth_user } from "../../../../../utils/auth.utils";
import { journal_model } from "../../../../models/@journal/journal";

export const get_journal = async (_parent: any, args: { id: string }, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);
        const journal = await journal_model.findOne({ _id: args.id, user_id: user._id });
        if (!journal) throw new Error("Journal entry not found.");
        return journal;
    } catch (error: any) {
        console.error("Get Journal Error:", error.message);
        throw new Error(error.message);
    }
};
