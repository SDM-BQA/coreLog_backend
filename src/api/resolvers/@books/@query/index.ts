import { get_book } from "./@resolvers/get-book";
import { get_my_books } from "./@resolvers/get-my-books";
import { get_book_filters } from "./@resolvers/get-book-filters";

const book_query = {
    get_book,
    get_my_books,
    get_book_filters,
};

export { book_query };
