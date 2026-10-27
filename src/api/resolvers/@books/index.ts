import { book_query } from "./@query";
import { book_mutation } from "./@mutation";

const book_resolver = {
    Query: book_query,
    Mutation: book_mutation,
};

export { book_resolver };
