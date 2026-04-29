import { mergeTypeDefs } from "@graphql-tools/merge";
import gql from "graphql-tag";
import test_type_def from "./test/test.type-def";
import user_type_def from "./@user/user.type-def";
import book_type_def from "./@books/book.type-def";
import { series_type_defs } from "./@series/series.type-def";
import { movie_type_defs } from "./@movies/movie.type-def";
import { poem_type_defs } from "./@poetry/poem.type-def";
import { target_type_defs } from "./@target/target.type-def";
import { journal_type_defs } from "./@journal/journal.type-def";

const main_types = gql`
  scalar Number
  type Query {
    _: String
  }
  type Mutation {
    _: String
  }
`;

const type_defs = [main_types, test_type_def, user_type_def, book_type_def, journal_type_defs, series_type_defs, movie_type_defs, poem_type_defs, target_type_defs];

export default mergeTypeDefs(type_defs);
