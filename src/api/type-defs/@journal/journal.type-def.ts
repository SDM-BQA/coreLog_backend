import { gql } from "apollo-server-express";

export const journal_type_defs = gql`
    type Journal {
        _id: ID!
        title: String!
        content: String!
        description: String
        journal_type: String!
        mood: String
        location: String!
        location_address: String
        location_city: String
        location_lat: Float
        location_lng: Float
        photos: [String!]!
        video: String
        tags: [String!]!
        date: String!
        time: String!
        is_favorite: Boolean!
        user_id: ID!
        created_at: String
        updated_at: String
    }

    input JournalFilter {
        search: String
        journal_type: String
        mood: String
        is_favorite: Boolean
        tags: [String!]
        date_from: String
        date_to: String
        page: Int
        limit: Int
    }

    type JournalResponse {
        journals: [Journal!]!
        total_count: Int!
        current_page: Int!
        per_page: Int!
        page_count: Int!
        has_next_page: Boolean!
    }

    input CreateJournalInput {
        title: String!
        content: String!
        description: String
        journal_type: String!
        mood: String
        location: String!
        location_address: String
        location_city: String
        location_lat: Float
        location_lng: Float
        photos: [String!]
        video: String
        tags: [String!]
        date: String!
        time: String!
        is_favorite: Boolean
    }

    input UpdateJournalInput {
        title: String
        content: String
        description: String
        journal_type: String
        mood: String
        location: String
        location_address: String
        location_city: String
        location_lat: Float
        location_lng: Float
        photos: [String!]
        video: String
        tags: [String!]
        date: String
        time: String
        is_favorite: Boolean
    }

    type JournalFilters {
        journal_types: [String!]!
        moods: [String!]!
        locations: [String!]!
        tags: [String!]!
    }

    type JournalStreak {
        current_streak: Int!
        longest_streak: Int!
        total_active_days: Int!
        active_days_this_month: Int!
        last_entry_date: String
        streak_updated_at: String
    }

    extend type Query {
        get_my_journals(filter: JournalFilter): JournalResponse!
        get_journal(id: ID!): Journal
        get_journal_filters: JournalFilters!
        get_journal_streak: JournalStreak!
    }

    extend type Mutation {
        create_journal(input: CreateJournalInput!): Journal!
        update_journal(id: ID!, input: UpdateJournalInput!): Journal!
        delete_journal(id: ID!): Boolean!
    }
`;

