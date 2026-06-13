import { gql } from "apollo-server-express";

export const screen_time_type_defs = gql`
    type ScreenTimeCategoryUsage {
        name: String!
        minutes: Int!
    }

    type ScreenTimeAppUsage {
        app_name: String!
        minutes: Int!
    }

    input ScreenTimeCategoryUsageInput {
        name: String!
        minutes: Int!
    }

    input ScreenTimeAppUsageInput {
        app_name: String!
        minutes: Int!
    }

    type ScreenTimeEntry {
        _id: ID!
        entry_date: String!
        total_minutes: Int!
        raw_text: String
        categories: [ScreenTimeCategoryUsage!]!
        apps: [ScreenTimeAppUsage!]!
        created_at: String
        updated_at: String
    }

    type ScreenTimeParseResult {
        raw_text: String
        total_minutes: Int!
        categories: [ScreenTimeCategoryUsage!]!
        apps: [ScreenTimeAppUsage!]!
    }

    type ScreenTimeSummary {
        total_days: Int!
        total_minutes: Int!
        avg_daily_minutes: Int!
        most_used_app: String
        most_used_app_minutes: Int!
        daily: [ScreenTimeEntry!]!
    }

    extend type Query {
        get_screen_time_entries(date_from: String, date_to: String): [ScreenTimeEntry!]!
        get_screen_time_summary(date_from: String, date_to: String): ScreenTimeSummary!
    }

    extend type Mutation {
        parse_screen_time_image(image_base64: String!): ScreenTimeParseResult!
        save_screen_time_entry(
            entry_date: String!
            categories: [ScreenTimeCategoryUsageInput!]
            apps: [ScreenTimeAppUsageInput!]!
            raw_text: String
            total_minutes: Int
        ): ScreenTimeEntry!
        delete_screen_time_entry(entry_date: String!): Boolean!
    }
`;
