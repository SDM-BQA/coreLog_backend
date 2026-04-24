import { gql } from "apollo-server-express";

export const movie_type_defs = gql`
    type Movie {
        _id: ID!
        title: String!
        director: String
        description: String
        genres: [String!]!
        release_year: String!
        runtime: Int!
        language: String
        origin_country: String
        status: String!
        rating: Float!
        review: String
        poster_image: String
        platform: String!
        started_from: String
        finished_on: String
        tmdb_id: Int
        original_title: String
        poster_path: String
        backdrop_path: String
        adult: Boolean
        video: Boolean
        vote_average: Float
        vote_count: Int
        user_id: ID!
        created_at: String
        updated_at: String
    }

    input MovieFilter {
        search: String
        genres: [String!]
        status: [String!]
        rating: Float
        director: String
        page: Int
        limit: Int
    }

    type MovieResponse {
        movies: [Movie!]!
        total_count: Int!
        current_page: Int!
        per_page: Int!
        page_count: Int!
        has_next_page: Boolean!
    }

    type MovieFilters {
        genres: [String!]!
        statuses: [String!]!
        directors: [String!]!
    }

    input CreateMovieInput {
        title: String!
        director: String
        description: String
        genres: [String!]!
        release_year: String!
        runtime: Int!
        language: String!
        origin_country: String!
        status: String!
        rating: Float!
        review: String
        poster_image: String
        platform: String!
        started_from: String
        finished_on: String
        tmdb_id: Int
        original_title: String
        poster_path: String
        backdrop_path: String
        adult: Boolean
        video: Boolean
        vote_average: Float
        vote_count: Int
    }

    input UpdateMovieInput {
        title: String
        director: String
        description: String
        genres: [String!]
        release_year: String
        runtime: Int
        language: String
        origin_country: String
        status: String
        rating: Float
        review: String
        poster_image: String
        platform: String
        started_from: String
        finished_on: String
        tmdb_id: Int
        original_title: String
        poster_path: String
        backdrop_path: String
        adult: Boolean
        video: Boolean
        vote_average: Float
        vote_count: Int
    }

    extend type Query {
        get_my_movies(filter: MovieFilter): MovieResponse!
        get_movie(id: ID!): Movie
        get_movie_filters: MovieFilters!
    }

    extend type Mutation {
        create_movie(input: CreateMovieInput!): Movie!
        update_movie(id: ID!, input: UpdateMovieInput!): Movie!
        delete_movie(id: ID!): Boolean!
    }
`;
