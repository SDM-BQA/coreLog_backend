import { music_queries }    from "./@query";
import { music_mutations }  from "./@mutation";

export const music_resolvers = {
    Query:    music_queries,
    Mutation: music_mutations,
};
