import { get_my_series } from "./@resolvers/get-my-series";
import { get_series } from "./@resolvers/get-series";
import { get_series_filters } from "./@resolvers/get-series-filters";
import { get_series_logs } from "./@resolvers/get-series-logs";

export const series_queries = {
    get_my_series,
    get_series,
    get_series_filters,
    get_series_logs,
};
