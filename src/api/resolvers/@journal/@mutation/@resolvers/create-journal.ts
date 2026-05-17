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

export const create_journal = async (_parent: any, args: { input: any }, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);

        const journal = await journal_model.create({
            ...args.input,
            photos: args.input.photos ?? [],
            tags: normalize_tags(args.input.tags),
            is_favorite: args.input.is_favorite ?? false,
            user_id: user._id,
        });
        await recompute_journal_streak(user._id);
        return journal;
    } catch (error: any) {
        console.error("Create Journal Error:", error.message);
        throw new Error(error.message);
    }
};
