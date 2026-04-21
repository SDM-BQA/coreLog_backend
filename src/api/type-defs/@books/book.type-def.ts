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
  }

  extend type Query {
    get_book(id: ID!): Book
    get_my_books: [Book]
    get_user_books(user_id: ID!): [Book]
  }

  extend type Mutation {
    create_book(input: CreateBookInput!): Book
    update_book(id: ID!, input: UpdateBookInput!): Book
    delete_book(id: ID!): Boolean
  }
`;

export default book_type_def;
