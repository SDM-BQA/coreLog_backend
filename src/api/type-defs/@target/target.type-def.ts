import { gql } from "apollo-server-express";

export const target_type_defs = gql`
    type Target {
        _id: ID!
        year: Int!
        movies: Int
        series: Int
        books: Int
        poems: Int
        user_id: ID!
        created_at: String
        updated_at: String
    }

    type TargetProgress {
        movies: Int!
        series: Int!
        books: Int!
        poems: Int!
    }

    input TargetInput {
        year: Int!
        movies: Int
        series: Int
        books: Int
        poems: Int
    }

    extend type Query {
        get_my_target(year: Int): Target
        get_target_progress(year: Int): TargetProgress!
    }

    extend type Mutation {
        set_target(input: TargetInput!): Target!
        delete_target(id: ID!): Boolean!
    }
`;
