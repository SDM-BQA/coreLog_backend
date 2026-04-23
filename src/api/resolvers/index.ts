import { mergeResolvers } from "@graphql-tools/merge";
import { user_resolver } from "./@user";
import { book_resolver } from "./@books";
import { test_resolver } from "./test/test.resolvers";


const resolvers = mergeResolvers([user_resolver, test_resolver, book_resolver]);
export default resolvers;