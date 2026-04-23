import { mergeTypeDefs } from "@graphql-tools/merge";
import gql from "graphql-tag";
import test_type_def from "./test/test.type-def";
import user_type_def from "./@user/user.type-def";
import book_type_def from "./@books/book.type-def";

const main_types = gql`
  scalar Number
  type Query {
    _: String
  }
  type Mutation {
    _: String
  }
`;

const type_defs = [main_types, test_type_def, user_type_def, book_type_def];

export default mergeTypeDefs(type_defs);
