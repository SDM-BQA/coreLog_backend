import { create_book } from "./@resolvers/create-book";
import { delete_book } from "./@resolvers/delete-book";
import { update_book } from "./@resolvers/update-book";
import { add_book_log } from "./@resolvers/add-book-log";
import { delete_book_log } from "./@resolvers/delete-book-log";

const book_mutation = {
    create_book,
    update_book,
    delete_book,
    add_book_log,
    delete_book_log,
};

export { book_mutation };
