import { mergeResolvers } from "@graphql-tools/merge";
import { test_resolver } from "./test/test.resolvers";
import { user_resolver } from "./@user/user";


const resolvers = [test_resolver, user_resolver]

export default mergeResolvers(resolvers)