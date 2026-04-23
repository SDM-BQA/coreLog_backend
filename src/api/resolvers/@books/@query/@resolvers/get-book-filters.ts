import { get_auth_user } from "../../../../../utils/auth.utils";
import { book_model } from "../../../../models/@books/book";

export const get_book_filters = async (_parent: any, _args: any, ctx: any) => {
    const user = await get_auth_user(ctx.req);

    const [genres, statuses, authors] = await Promise.all([
        book_model.distinct("genres", { user_id: user._id }),
        book_model.distinct("status", { user_id: user._id }),
        book_model.distinct("author", { user_id: user._id }),
    ]);

    return {
        genres:   genres.filter(Boolean).sort(),
        statuses: statuses.filter(Boolean),
        authors:  authors.filter(Boolean).sort(),
    };
};
