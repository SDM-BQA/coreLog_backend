import { get_auth_user } from "../../../../../utils/auth.utils";
import { book_model } from "../../../../models/@books/book";

export const create_book = async (_parent: any, args: any, ctx: any) => {
    try {
        const user = await get_auth_user(ctx.req);
        const { input } = args;

        // Check for duplicate title (case-insensitive)
        const existingBook = await book_model.findOne({
            user_id: user._id,
            title: { $regex: new RegExp(`^${input.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`, "i") }
        });

        if (existingBook) {
            throw new Error(`A book with the title "${input.title}" already exists in your collection.`);
        }

        const newBook = new book_model({
            ...input,
            user_id: user._id,
        });

        await newBook.save();

        // Update user's library
        if (!user.library) {
            user.library = { books: [], movies: [], series: [] };
        }
        user.library.books.push(newBook._id);
        await user.save();

        return {
            ...newBook.toObject(),
            created_at: newBook.created_at?.toISOString(),
            updated_at: newBook.updated_at?.toISOString(),
        };
    } catch (error: any) {
        console.error("Create Book Error:", error.message);
        throw new Error(error.message);
    }
};
