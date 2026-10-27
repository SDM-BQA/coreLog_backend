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

const normalize_template_blocks = (blocks: unknown) => {
    if (!Array.isArray(blocks)) return [];
    return blocks
        .map((block: any) => ({
            id: String(block?.id ?? block?.type ?? "").trim(),
            type: String(block?.type ?? "").trim(),
            title: String(block?.title ?? "").trim(),
            items: Array.isArray(block?.items)
                ? block.items
                    .map((item: any) => ({
                        id: String(item?.id ?? "").trim(),
                        amount: Number(item?.amount),
                        note: String(item?.note ?? "").trim(),
                        category: item?.category ? String(item.category).trim() : undefined,
                    }))
                    .filter((item: any) => item.id && Number.isFinite(item.amount) && item.amount > 0 && item.note)
                : [],
        }))
        .filter((block: any) => block.id && block.type && block.title);
};

export const update_journal = async (_parent: any, args: { id: string; input: any }, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);
        const update_payload = { ...args.input };
        if ("tags" in update_payload) {
            update_payload.tags = normalize_tags(update_payload.tags);
        }
        if ("template_blocks" in update_payload) {
            update_payload.template_blocks = normalize_template_blocks(update_payload.template_blocks);
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
