import { get_screen_time_entries } from "./@resolvers/get-screen-time-entries";
import { get_screen_time_summary } from "./@resolvers/get-screen-time-summary";

export const screen_time_queries = {
    get_screen_time_entries,
    get_screen_time_summary,
};
