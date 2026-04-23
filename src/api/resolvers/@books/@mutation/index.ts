import { create_book } from "./@resolvers/create-book";
import { delete_book } from "./@resolvers/delete-book";
import { update_book } from "./@resolvers/update-book";

const book_mutation = {
    create_book,
    update_book,
    delete_book,
};

export { book_mutation };
