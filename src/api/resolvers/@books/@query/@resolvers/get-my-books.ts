import { get_auth_user } from "../../../../../utils/auth.utils";
import { book_model } from "../../../../models/@books/book";
import { quick_list } from "../../../../../utils/quick_list.utils";

interface BookFilter {
    search?: string;
    genres?: string[];
    status?: string[];
    rating?: number;
    author?: string;
    page?: number;
    limit?: number;
}

export const get_my_books = async (_parent: any, args: { filter?: BookFilter }, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);
        const filter = args.filter ?? {};

        const result = await quick_list(book_model, {
            base_query: { user_id: user._id },
            search: filter.search,
            search_fields: ["title", "author"],
            match: {
                ...(filter.genres?.length  && { genres: filter.genres }),
                ...(filter.status?.length  && { status: filter.status }),
                ...(filter.author          && { author: filter.author }),
            },
            min: {
                ...(filter.rating != null && { rating: filter.rating }),
            },
            page:  filter.page,
            limit: filter.limit,
        });

        return {
            books:        result.data,
            total_count:  result.total_count,
            current_page: result.current_page,
            per_page:     result.per_page,
            page_count:   result.page_count,
            has_next_page: result.has_next_page,
        };
    } catch (error: any) {
        console.error("Get My Books Error:", error.message);
        return { books: [], total: 0, page: 1, limit: 10, total_pages: 1, has_next_page: false };
    }
};
