import { get_auth_user } from "../../../../../utils/auth.utils";
import { series_model } from "../../../../models/@series/series";
import { quick_list } from "../../../../../utils/quick_list.utils";

interface SeriesFilter {
    search?: string;
    genres?: string[];
    status?: string[];
    rating?: number;
    platforms?: string[];
    creator?: string;
    page?: number;
    limit?: number;
}

export const get_my_series = async (_parent: any, args: { filter?: SeriesFilter }, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);
        const filter = args.filter ?? {};

        const result = await quick_list(series_model, {
            base_query: { user_id: user._id },
            search: filter.search,
            search_fields: ["title", "creator"],
            match: {
                ...(filter.genres?.length    && { genres: filter.genres }),
                ...(filter.status?.length    && { status: filter.status }),
                ...(filter.platforms?.length && { platform: filter.platforms }),
                ...(filter.creator           && { creator: filter.creator }),
            },
            min: {
                ...(filter.rating != null && { rating: filter.rating }),
            },
            page:  filter.page,
            limit: filter.limit,
        });

        return {
            series:        result.data,
            total_count:  result.total_count,
            current_page: result.current_page,
            per_page:     result.per_page,
            page_count:   result.page_count,
            has_next_page: result.has_next_page,
        };
    } catch (error: any) {
        console.error("Get My Series Error:", error.message);
        return { series: [], total_count: 0, current_page: 1, per_page: 10, page_count: 1, has_next_page: false };
    }
};
