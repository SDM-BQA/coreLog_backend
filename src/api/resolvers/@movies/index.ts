import { movies_queries } from "./@query";
import { movies_mutations } from "./@mutation";

export const movies_resolvers = {
    Query: movies_queries,
    Mutation: movies_mutations,
};
