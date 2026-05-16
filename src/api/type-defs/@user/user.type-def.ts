import { gql } from "apollo-server-express";

const user_type_def = gql`
  type AuthResponse {
    accessToken: String!
    refreshToken: String!
    user: User!
  }

  type Library {
    books: [Book]
    movies: [ID]
    series: [ID]
    book_logs: [ID]
    series_logs: [ID]
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
    plan: String
    inner_circle_email: String
    inner_circle_started_at: String
    inner_circle_expires_at: String
    library: Library
  }

  type InnerCircleStatus {
    plan: String!
    is_active: Boolean!
    started_at: String
    expires_at: String
    days_left: Int!
    renewal_cycle: String!
    email: String
  }

  input CreateUserInput {
    first_name: String!
    last_name: String!
    email_id: String!
    password: String!
    profile_pic: String
    mobile_no: String
    gender: String
    user_name: String!
  }

  input UpdateUserInput {
    first_name: String
    last_name: String
    email_id: String
    profile_pic: String
    mobile_no: String
    gender: String
    user_name: String
  }

  type DashboardStats {
    movies: Int!
    series: Int!
    books: Int!
    poems: Int!
    journal_entries: Int!
  }

  extend type Query {
    get_user_account(id: ID!): User
    get_all_user_accounts: [User]
    check_email_exists(email: String!): Boolean
    check_username_exists(username: String!): Boolean
    get_dashboard_stats: DashboardStats!
    get_inner_circle_status: InnerCircleStatus!
  }

  extend type Mutation {
    create_user_account(input: CreateUserInput!): AuthResponse,
    update_user_account(id: ID!, input: UpdateUserInput!): User,
    delete_user_account(id: ID!): Boolean,
    send_otp(email: String!): Boolean,
    verify_otp(email: String!, otp: String!): Boolean,
    send_journal_pin_reset_otp(email: String!): Boolean,
    login_user_account(email_id: String!, password: String!): AuthResponse,
    send_inner_circle_otp(email: String!): Boolean!,
    verify_inner_circle_otp(email: String!, otp: String!): InnerCircleStatus!,
    cancel_inner_circle_membership(email: String!, otp: String!): InnerCircleStatus!
  }
`;

export default user_type_def;
