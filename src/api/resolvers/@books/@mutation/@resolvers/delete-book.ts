import { get_auth_user } from "../../../../../utils/auth.utils";
import { book_model } from "../../../../models/@books/book";

export const delete_book = async (_parent: any, args: any, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);
        const { id } = args;

        const book = await book_model.findOneAndDelete({ _id: id, user_id: user._id });
        if (!book) {
            throw new Error("Book not found or unauthorized");
        }

        // Remove from user's library
        if (user.library && user.library.books) {
            user.library.books = user.library.books.filter(
                (bookId: any) => bookId.toString() !== id
            );
            await user.save();
        }

        return true;
    } catch (error: any) {
        console.error("Delete Book Error:", error.message);
        throw new Error(error.message);
    }
};
