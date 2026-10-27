import { journal_queries } from "./@query";
import { journal_mutations } from "./@mutation";

export const journal_resolvers = {
    Query: journal_queries,
    Mutation: journal_mutations,
};
