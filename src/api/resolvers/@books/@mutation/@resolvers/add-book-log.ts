import { require_inner_circle_user } from "../../../../../utils/auth.utils";
import { book_log_model } from "../../../../models/@books/book-log";

export const add_book_log = async (_parent: any, args: any, ctx: any) => {
    try {
        const user = await require_inner_circle_user(ctx.req);
        const { book_id, input } = args;

        const log = new book_log_model({
            book_id,
            user_id: user._id,
            date: input.date,
            pages_read: input.pages_read,
            current_page: input.current_page,
            note: input.note,
        });

        await log.save();

        if (!user.library) user.library = { books: [], movies: [], series: [], book_logs: [], series_logs: [] };
        if (!user.library.book_logs) user.library.book_logs = [];
        user.library.book_logs.push(log._id);
        await user.save();

        return {
            ...log.toObject(),
            created_at: log.created_at?.toISOString(),
            updated_at: log.updated_at?.toISOString(),
        };
    } catch (error: any) {
        console.error("Add Book Log Error:", error.message);
        throw new Error(error.message);
    }
};
