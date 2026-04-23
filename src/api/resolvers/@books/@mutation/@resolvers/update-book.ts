import { get_auth_user } from "../../../../../utils/auth.utils";
import { book_model } from "../../../../models/@books/book";

export const update_book = async (_parent: any, args: any, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);
        const { id, input } = args;

        const book = await book_model.findOne({ _id: id, user_id: user._id });
        if (!book) {
            throw new Error("Book not found or unauthorized");
        }

        Object.assign(book, input);
        await book.save();

        return {
            ...book.toObject(),
            updated_at: book.updated_at?.toISOString(),
        };
    } catch (error: any) {
        console.error("Update Book Error:", error.message);
        throw new Error(error.message);
    }
};
