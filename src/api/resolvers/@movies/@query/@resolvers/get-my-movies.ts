import { get_auth_user } from "../../../../../utils/auth.utils";
import { movie_model } from "../../../../models/@movies/movie";
import { quick_list } from "../../../../../utils/quick_list.utils";

interface MovieFilter {
    search?: string;
    genres?: string[];
    status?: string[];
    rating?: number;
    directors?: string[];
    languages?: string[];
    platforms?: string[];
    page?: number;
    limit?: number;
}

export const get_my_movies = async (_parent: any, args: { filter?: MovieFilter }, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);
        const filter = args.filter ?? {};

        const result = await quick_list(movie_model, {
            base_query: { user_id: user._id },
            search: filter.search,
            search_fields: ["title", "director"],
            match: {
                ...(filter.genres?.length    && { genres: filter.genres }),
                ...(filter.status?.length    && { status: filter.status }),
                ...(filter.directors?.length && { director: filter.directors }),
                ...(filter.languages?.length && { language: filter.languages }),
                ...(filter.platforms?.length && { platform: filter.platforms }),
            },
            min: {
                ...(filter.rating != null && { rating: filter.rating }),
            },
            page:  filter.page,
            limit: filter.limit,
        });

        return {
            movies:        result.data,
            total_count:  result.total_count,
            current_page: result.current_page,
            per_page:     result.per_page,
            page_count:   result.page_count,
            has_next_page: result.has_next_page,
        };
    } catch (error: any) {
        console.error("Get My Movies Error:", error.message);
        return { movies: [], total_count: 0, current_page: 1, per_page: 10, page_count: 1, has_next_page: false };
    }
};
