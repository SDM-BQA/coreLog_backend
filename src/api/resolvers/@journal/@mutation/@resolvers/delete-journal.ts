import { get_auth_user } from "../../../../../utils/auth.utils";
import { journal_model } from "../../../../models/@journal/journal";
import { recompute_journal_streak } from "../../streak.utils";

export const delete_journal = async (_parent: any, args: { id: string }, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);
        const result = await journal_model.findOneAndDelete({ _id: args.id, user_id: user._id });
        if (result) await recompute_journal_streak(user._id);
        return !!result;
    } catch (error: any) {
        console.error("Delete Journal Error:", error.message);
        throw new Error(error.message);
    }
};
