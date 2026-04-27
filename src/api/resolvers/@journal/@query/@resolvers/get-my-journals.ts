import { get_auth_user } from "../../../../../utils/auth.utils";
import { journal_model } from "../../../../models/@journal";

export const get_my_journals = async (_parent: any, args: { filter?: any }, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);
        const f = args.filter ?? {};
        const page = f.page ?? 1;
        const limit = f.limit ?? 12;
        const skip = (page - 1) * limit;

        const query: Record<string, any> = { user_id: user._id };

        if (f.search) {
            query.$text = { $search: f.search };
        }
        if (f.journal_type) query.journal_type = f.journal_type;
        if (f.mood) query.mood = f.mood;
        if (f.is_favorite !== undefined && f.is_favorite !== null) query.is_favorite = f.is_favorite;
        if (f.tags?.length) query.tags = { $in: f.tags };
        if (f.date_from || f.date_to) {
            query.date = {};
            if (f.date_from) query.date.$gte = f.date_from;
            if (f.date_to) query.date.$lte = f.date_to;
        }

        const [journals, total_count] = await Promise.all([
            journal_model.find(query).sort({ date: -1, created_at: -1 }).skip(skip).limit(limit).lean(),
            journal_model.countDocuments(query),
        ]);

        const page_count = Math.ceil(total_count / limit);
        return {
            journals,
            total_count,
            current_page: page,
            per_page: limit,
            page_count,
            has_next_page: page < page_count,
        };
    } catch (error: any) {
        console.error("Get My Journals Error:", error.message);
        throw new Error(error.message);
    }
};
