import { gql } from "apollo-server-express";

const book_type_def = gql`
  type Book {
    _id: ID!
    title: String!
    author: String!
    description: String
    genres: [String]!
    publication_year: String!
    status: String!
    rating: Float!
    review: String
    cover_image: String
    page_count: Int
    publisher: String
    language: String
    started_from: String
    finished_on: String
    series_name: String
    series_number: Int
    user_id: ID!
    created_at: String
    updated_at: String
  }

  input CreateBookInput {
    title: String!
    author: String!
    description: String
    genres: [String]!
    publication_year: String!
    status: String!
    rating: Float
    review: String
    cover_image: String
    page_count: Int
    publisher: String
    language: String
    started_from: String
    finished_on: String
    series_name: String
    series_number: Int
  }

  input UpdateBookInput {
    title: String
    author: String
    description: String
    genres: [String]
    publication_year: String
    status: String
    rating: Float
    review: String
    cover_image: String
    page_count: Int
    publisher: String
    language: String
    started_from: String
    finished_on: String
    series_name: String
    series_number: Int
  }

  type BookPage {
    books: [Book]!
    total_count: Int!
    current_page: Int!
    per_page: Int!
    page_count: Int!
    has_next_page: Boolean!
  }

  input BookFilterInput {
    search: String
    genres: [String]
    status: [String]
    rating: Float
    author: String
    page: Int
    limit: Int
  }

  type BookFilters {
    genres: [String!]!
    statuses: [String!]!
    authors: [String!]!
  }

  extend type Query {
    get_book(id: ID!): Book
    get_my_books(filter: BookFilterInput): BookPage!
    get_user_books(user_id: ID!): [Book]
    get_book_filters: BookFilters!
  }

  extend type Mutation {
    create_book(input: CreateBookInput!): Book
    update_book(id: ID!, input: UpdateBookInput!): Book
    delete_book(id: ID!): Boolean
  }
`;

export default book_type_def;
