import { get_auth_user } from "../../../../../utils/auth.utils";
import { book_model } from "../../../../models/@books/book";
import { movie_model } from "../../../../models/@movies";
import { poem_model } from "../../../../models/@poetry";
import { series_model } from "../../../../models/@series/series";
// import { journal_model } from "../../../../models/@journal"; // Uncomment when journal is ready

export const get_dashboard_stats = async (_parent: any, _args: any, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);

        const [movies, series, books, poems] = await Promise.all([
            movie_model.countDocuments({ user_id: user._id }),
            series_model.countDocuments({ user_id: user._id }),
            book_model.countDocuments({ user_id: user._id }),
            poem_model.countDocuments({ user_id: user._id }),
            // journal_model.countDocuments({ user_id: user._id }),
        ]);

        return {
            movies,
            series,
            books,
            poems,
            journal_entries: 0, // Default to 0 for now
        };
    } catch (error: any) {
        console.error("Get Dashboard Stats Error:", error.message);
        return {
            movies: 0,
            series: 0,
            books: 0,
            poems: 0,
            journal_entries: 0,
        };
    }
};
