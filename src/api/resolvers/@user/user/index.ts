import { user_mutation } from "./@mutation";
import { user_query } from "./@query";

export const user_resolver = {
    Query: user_query,
    Mutation: user_mutation
}