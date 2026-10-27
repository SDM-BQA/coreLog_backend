import { get_auth_user } from "../../../../../utils/auth.utils";
import { journal_model } from "../../../../models/@journal/journal";

export const get_journal_filters = async (_parent: any, _args: any, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);

        const [journal_types, moods, locations, tags] = await Promise.all([
            journal_model.distinct("journal_type", { user_id: user._id }),
            journal_model.distinct("mood", { user_id: user._id }),
            journal_model.distinct("location", { user_id: user._id }),
            journal_model.distinct("tags", { user_id: user._id }),
        ]);

        return {
            journal_types: journal_types.filter(Boolean).sort(),
            moods: moods.filter(Boolean).sort(),
            locations: locations.filter(Boolean).sort(),
            tags: tags.filter(Boolean).sort(),
        };
    } catch (error: any) {
        console.error("Get Journal Filters Error:", error.message);
        return { journal_types: [], moods: [], locations: [], tags: [] };
    }
};
