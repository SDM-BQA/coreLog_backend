import { get_auth_user } from "../../../../../utils/auth.utils";
import { quick_list } from "../../../../../utils/quick_list.utils";
import { journal_model } from "../../../../models/@journal/journal";

interface JournalFilter {
    search?: string;
    journal_type?: string;
    mood?: string;
    is_favorite?: boolean;
    tags?: string[];
    date_from?: string;
    date_to?: string;
    page?: number;
    limit?: number;
}

export const get_my_journals = async (_parent: any, args: { filter?: JournalFilter }, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);
        const f = args.filter ?? {};

        const base_query: Record<string, any> = { user_id: user._id };
        if (f.date_from || f.date_to) {
            base_query.date = {};
            if (f.date_from) base_query.date.$gte = f.date_from;
            if (f.date_to) base_query.date.$lte = f.date_to;
        }

        const result = await quick_list(journal_model, {
            base_query,
            search: f.search,
            search_fields: ["title", "content"],
            match: {
                ...(f.journal_type && { journal_type: f.journal_type }),
                ...(f.mood && { mood: f.mood }),
                ...(f.is_favorite !== undefined && f.is_favorite !== null && { is_favorite: f.is_favorite }),
                ...(f.tags?.length && { tags: f.tags }),
            },
            sort_by: "date",
            sort_dir: -1,
            page: f.page,
            limit: f.limit,
        });

        return {
            journals: result.data,
            total_count: result.total_count,
            current_page: result.current_page,
            per_page: result.per_page,
            page_count: result.page_count,
            has_next_page: result.has_next_page,
        };
    } catch (error: any) {
        console.error("Get My Journals Error:", error.message);
        return { journals: [], total_count: 0, current_page: 1, per_page: 10, page_count: 1, has_next_page: false };
    }
};
