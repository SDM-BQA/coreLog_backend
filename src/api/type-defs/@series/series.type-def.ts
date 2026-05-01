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
        episodes: Int!
        language: String
        origin_country: String
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
        platforms: [String]
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
        platforms: [String!]!
    }

    input CreateSeriesInput {
        title: String!
        creator: String
        description: String
        genres: [String!]!
        release_year: String!
        seasons: Int!
        episodes: Int!
        language: String!
        origin_country: String!
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
        episodes: Int
        language: String
        origin_country: String
        status: String
        rating: Float
        review: String
        poster_image: String
        platform: String
        started_from: String
        finished_on: String
    }

    type SeriesLog {
        _id: ID!
        series_id: ID!
        user_id: ID!
        date: String!
        episodes_watched: Int!
        current_episode: Int!
        note: String
        created_at: String
        updated_at: String
    }

    input SeriesLogInput {
        date: String!
        episodes_watched: Int!
        current_episode: Int!
        note: String
    }

    extend type Query {
        get_my_series(filter: SeriesFilter): SeriesResponse!
        get_series(id: ID!): Series
        get_series_filters: SeriesFilters!
        get_series_logs(series_id: ID!): [SeriesLog!]!
    }

    extend type Mutation {
        create_series(input: CreateSeriesInput!): Series!
        update_series(id: ID!, input: UpdateSeriesInput!): Series!
        delete_series(id: ID!): Boolean!
        add_series_log(series_id: ID!, input: SeriesLogInput!): SeriesLog!
        delete_series_log(id: ID!): Boolean!
    }
`;
