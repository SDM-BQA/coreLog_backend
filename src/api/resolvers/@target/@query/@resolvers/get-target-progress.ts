import { get_auth_user } from "../../../../../utils/auth.utils";
import { book_model } from "../../../../models/@books/book";
import { movie_model } from "../../../../models/@movies";
import { poem_model } from "../../../../models/@poetry";
import { series_model } from "../../../../models/@series/series";

const parseDate = (val?: string | null): Date | null => {
    if (!val) return null;
    const num = Number(val);
    const d = isNaN(num) ? new Date(val as string) : new Date(num);
    return isNaN(d.getTime()) ? null : d;
};

const countByYear = (items: { finished_on?: string; created_at?: any }[], year: number, field: "finished_on" | "created_at"): number => {
    return items.filter((item) => {
        const d = parseDate(field === "finished_on" ? item.finished_on : String(item.created_at ?? ""));
        return d?.getFullYear() === year;
    }).length;
};

export const get_target_progress = async (_parent: any, args: { year?: number }, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);
        const year = args.year ?? new Date().getFullYear();

        const [movies_raw, series_raw, books_raw, poems_raw] = await Promise.all([
            movie_model.find({ user_id: user._id, status: { $in: ["watched", "rewatching"] }, finished_on: { $exists: true, $nin: [null, ""] } }, { finished_on: 1 }).lean(),
            series_model.find({ user_id: user._id, status: { $in: ["watched", "rewatching"] }, finished_on: { $exists: true, $nin: [null, ""] } }, { finished_on: 1 }).lean(),
            book_model.find({ user_id: user._id, status: "read", finished_on: { $exists: true, $nin: [null, ""] } }, { finished_on: 1 }).lean(),
            poem_model.find({ user_id: user._id }, { created_at: 1 }).lean(),
        ]);

        return {
            movies: countByYear(movies_raw as any[], year, "finished_on"),
            series: countByYear(series_raw as any[], year, "finished_on"),
            books:  countByYear(books_raw  as any[], year, "finished_on"),
            poems:  countByYear(poems_raw  as any[], year, "created_at"),
        };
    } catch (error: any) {
        console.error("Get Target Progress Error:", error.message);
        return { movies: 0, series: 0, books: 0, poems: 0 };
    }
};
