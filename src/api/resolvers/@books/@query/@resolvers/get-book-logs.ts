import { get_auth_user } from "../../../../../utils/auth.utils";
import { book_log_model } from "../../../../models/@books/book-log";

export const get_book_logs = async (_parent: any, args: { book_id: string }, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);

        const logs = await book_log_model
            .find({ book_id: args.book_id, user_id: user._id })
            .sort({ date: 1 })
            .lean();

        return logs.map((log: any) => ({
            ...log,
            created_at: log.created_at?.toISOString(),
            updated_at: log.updated_at?.toISOString(),
        }));
    } catch (error: any) {
        console.error("Get Book Logs Error:", error.message);
        throw new Error(error.message);
    }
};
