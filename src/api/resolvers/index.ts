import { mergeResolvers } from "@graphql-tools/merge";
import { user_resolver } from "./@user";
import { book_resolver } from "./@books";
import { series_resolvers } from "./@series";
import { movies_resolvers } from "./@movies";
import { poem_resolvers } from "./@poetry";
import { target_resolvers } from "./@target";
import { journal_resolvers } from "./@journal";
import { screen_time_resolvers } from "./@screen-time";
import { test_resolver } from "./test/test.resolvers";

const resolvers = mergeResolvers([user_resolver, test_resolver, book_resolver, series_resolvers, movies_resolvers, poem_resolvers, target_resolvers, journal_resolvers, screen_time_resolvers]);
export default resolvers;
