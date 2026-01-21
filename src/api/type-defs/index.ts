import { mergeTypeDefs } from "@graphql-tools/merge";
import { gql } from "apollo-server-express";
import { test_type_def } from "./test.type-def";

const main_types = gql`
  scalar Number
  type Query {
    _: String
  }
  type Mutation {
    _: String
  }
`;

const type_defs = [main_types, test_type_def]

export default mergeTypeDefs(type_defs)