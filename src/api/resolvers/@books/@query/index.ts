import { get_book } from "./@resolvers/get-book";
import { get_my_books } from "./@resolvers/get-my-books";

const book_query = {
    get_book,
    get_my_books,
};

export { book_query };
