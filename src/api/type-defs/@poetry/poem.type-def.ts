import { gql } from "apollo-server-express";

export const poem_type_defs = gql`
    type Poem {
        _id: ID!
        title: String!
        content: String!
        language: String!
        poem_type: String!
        mood: String
        atmosphere: String
        tags: [String!]!
        cover_image: String
        status: String!
        user_id: ID!
        created_at: String
        updated_at: String
    }

    input PoemFilter {
        search: String
        language: String
        poem_type: String
        status: String
        tags: [String!]
        page: Int
        limit: Int
    }

    type PoemResponse {
        poems: [Poem!]!
        total_count: Int!
        current_page: Int!
        per_page: Int!
        page_count: Int!
        has_next_page: Boolean!
    }

    input CreatePoemInput {
        title: String!
        content: String!
        language: String!
        poem_type: String!
        mood: String
        atmosphere: String
        tags: [String!]
        cover_image: String
        status: String!
        created_at: String
    }

    input UpdatePoemInput {
        title: String
        content: String
        language: String
        poem_type: String
        mood: String
        atmosphere: String
        tags: [String!]
        cover_image: String
        status: String
        created_at: String
    }

    extend type Query {
        get_my_poems(filter: PoemFilter): PoemResponse!
        get_poem(id: ID!): Poem
    }

    extend type Mutation {
        create_poem(input: CreatePoemInput!): Poem!
        update_poem(id: ID!, input: UpdatePoemInput!): Poem!
        delete_poem(id: ID!): Boolean!
    }
`;
