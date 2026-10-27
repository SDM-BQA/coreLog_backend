import { get_auth_user } from "../../../../../utils/auth.utils";
import { book_log_model } from "../../../../models/@books/book-log";

export const delete_book_log = async (_parent: any, args: any, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);
        const { id } = args;

        const log = await book_log_model.findOneAndDelete({ _id: id, user_id: user._id });
        if (!log) throw new Error("Log entry not found or unauthorized");

        if (user.library?.book_logs) {
            user.library.book_logs = user.library.book_logs.filter(
                (logId: any) => logId.toString() !== id
            );
            await user.save();
        }

        return true;
    } catch (error: any) {
        console.error("Delete Book Log Error:", error.message);
        throw new Error(error.message);
    }
};
