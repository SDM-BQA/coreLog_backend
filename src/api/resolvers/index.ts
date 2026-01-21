import { mergeResolvers } from "@graphql-tools/merge";
import { test_resolver } from "./test.resolvers";

const resolvers = [test_resolver]

export default mergeResolvers(resolvers)