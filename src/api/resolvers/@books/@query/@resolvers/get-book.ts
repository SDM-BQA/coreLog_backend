import { book_model } from "../../../../models/@books/book";

export const get_book = async (_parent: any, args: any, _ctx: any) => {
    try {
        const { id } = args;
        const book = await book_model.findById(id);
        if (book) {
            return {
                ...book.toObject(),
                created_at: book.created_at?.toISOString(),
                updated_at: book.updated_at?.toISOString(),
            };
        }
        return null;
    } catch (error: any) {
        console.error("Get Book Error:", error.message);
        return null;
    }
};
