import { get_auth_user } from "../../../../../utils/auth.utils";
import { poem_model } from "../../../../models/@poetry";
import { quick_list } from "../../../../../utils/quick_list.utils";

interface PoemFilter {
    search?: string;
    language?: string;
    poem_type?: string;
    status?: string;
    tags?: string[];
    page?: number;
    limit?: number;
}

export const get_my_poems = async (_parent: any, args: { filter?: PoemFilter }, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);
        const filter = args.filter ?? {};

        const result = await quick_list(poem_model, {
            base_query: { user_id: user._id },
            search: filter.search,
            search_fields: ["title", "content"],
            match: {
                ...(filter.language  && { language: filter.language }),
                ...(filter.poem_type && { poem_type: filter.poem_type }),
                ...(filter.status    && { status: filter.status }),
                ...(filter.tags?.length && { tags: filter.tags }),
            },
            page:  filter.page,
            limit: filter.limit,
        });

        return {
            poems:         result.data,
            total_count:  result.total_count,
            current_page: result.current_page,
            per_page:     result.per_page,
            page_count:   result.page_count,
            has_next_page: result.has_next_page,
        };
    } catch (error: any) {
        console.error("Get My Poems Error:", error.message);
        return { poems: [], total_count: 0, current_page: 1, per_page: 10, page_count: 1, has_next_page: false };
    }
};
