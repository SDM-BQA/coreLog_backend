import { gql } from "apollo-server-express";

export const series_type_defs = gql`
    type Series {
        _id: ID!
        title: String!
        creator: String
        description: String
        genres: [String!]!
        release_year: String!
        seasons: Int!
        status: String!
        rating: Float!
        review: String
        poster_image: String
        platform: String!
        started_from: String
        finished_on: String
        user_id: ID!
        created_at: String
        updated_at: String
    }

    input SeriesFilter {
        search: String
        genres: [String!]
        status: [String!]
        rating: Float
        creator: String
        page: Int
        limit: Int
    }

    type SeriesResponse {
        series: [Series!]!
        total_count: Int!
        current_page: Int!
        per_page: Int!
        page_count: Int!
        has_next_page: Boolean!
    }

    type SeriesFilters {
        genres: [String!]!
        statuses: [String!]!
        creators: [String!]!
    }

    input CreateSeriesInput {
        title: String!
        creator: String
        description: String
        genres: [String!]!
        release_year: String!
        seasons: Int!
        status: String!
        rating: Float!
        review: String
        poster_image: String
        platform: String!
        started_from: String
        finished_on: String
    }

    input UpdateSeriesInput {
        title: String
        creator: String
        description: String
        genres: [String!]
        release_year: String
        seasons: Int
        status: String
        rating: Float
        review: String
        poster_image: String
        platform: String
        started_from: String
        finished_on: String
    }

    extend type Query {
        get_my_series(filter: SeriesFilter): SeriesResponse!
        get_series(id: ID!): Series
        get_series_filters: SeriesFilters!
    }

    extend type Mutation {
        create_series(input: CreateSeriesInput!): Series!
        update_series(id: ID!, input: UpdateSeriesInput!): Series!
        delete_series(id: ID!): Boolean!
    }
`;
