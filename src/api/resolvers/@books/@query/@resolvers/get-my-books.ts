import { get_auth_user } from "../../../../../utils/auth.utils";
import { book_model } from "../../../../models/@books/book";

export const get_my_books = async (_parent: any, _args: any, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);
        const books = await book_model.find({ user_id: user._id }).sort({ created_at: -1 });
        return books.map(book => ({
            ...book.toObject(),
            created_at: book.created_at?.toISOString(),
            updated_at: book.updated_at?.toISOString(),
        }));
    } catch (error: any) {
        console.error("Get My Books Error:", error.message);
        return [];
    }
};
