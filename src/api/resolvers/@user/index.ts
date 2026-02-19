import { user_query } from "./@query";
import { user_mutation } from "./@mutation";

const user_resolver = {
    Query: user_query,
    Mutation: user_mutation
};

export { user_resolver };