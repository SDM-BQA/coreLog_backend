import { series_queries } from "./@query";
import { series_mutations } from "./@mutation";

export const series_resolvers = {
    Query: series_queries,
    Mutation: series_mutations,
};
