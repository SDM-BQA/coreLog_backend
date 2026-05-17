import { get_auth_user } from "../../../../../utils/auth.utils";
import { journal_model } from "../../../../models/@journal/journal";
import { recompute_journal_streak } from "../../streak.utils";

const normalize_tags = (tags: unknown): string[] => {
    if (!Array.isArray(tags)) return [];
    return Array.from(
        new Set(
            tags
                .map((t) => String(t ?? "").replace(/^#/, "").trim().toLowerCase().replace(/\s+/g, "_"))
                .filter(Boolean)
        )
    );
};

export const update_journal = async (_parent: any, args: { id: string; input: any }, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);
        const update_payload = { ...args.input };
        if ("tags" in update_payload) {
            update_payload.tags = normalize_tags(update_payload.tags);
        }

        const journal = await journal_model.findOneAndUpdate(
            { _id: args.id, user_id: user._id },
            { $set: update_payload },
            { new: true }
        );

        if (!journal) throw new Error("Journal entry not found or access denied.");
        await recompute_journal_streak(user._id);
        return journal;
    } catch (error: any) {
        console.error("Update Journal Error:", error.message);
        throw new Error(error.message);
    }
};
