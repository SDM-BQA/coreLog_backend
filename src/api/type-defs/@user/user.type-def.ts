import { gql } from "apollo-server-express";

const user_type_def = gql`
  type AuthResponse {
    accessToken: String!
    refreshToken: String!
    user: User!
  }

  type User {
    _id: ID!
    first_name: String!
    last_name: String!
    email_id: String!
    profile_pic: String
    mobile_no: String
    user_name: String
    gender: String
  }

  input CreateUserInput {
    first_name: String!
    last_name: String!
    email_id: String!
    password: String!
    profile_pic: String
    mobile_no: String
    gender: String
  }

  input UpdateUserInput {
    first_name: String
    last_name: String
    email_id: String
    profile_pic: String
    mobile_no: String
    gender: String
  }

  extend type Query {
    get_user_account(id: ID!): User
    get_all_user_accounts: [User]
  }

  extend type Mutation {
    create_user_account(input: CreateUserInput!): AuthResponse,
    update_user_account(id: ID!, input: UpdateUserInput!): User,
    delete_user_account(id: ID!): Boolean
  }
`;

export default user_type_def;
