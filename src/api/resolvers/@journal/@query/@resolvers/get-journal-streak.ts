import { get_auth_user } from "../../../../../utils/auth.utils";
import { journal_streak_model } from "../../../../models/@journal/journal-streak";
import { recompute_journal_streak } from "../../streak.utils";

export const get_journal_streak = async (_parent: any, _args: any, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);
        const existing = await journal_streak_model.findOne({ user_id: user._id });
        if (existing) return existing;
        return await recompute_journal_streak(user._id);
    } catch (error: any) {
        console.error("Get Journal Streak Error:", error.message);
        throw new Error(error.message);
    }
};
