import { get_my_series } from "./@resolvers/get-my-series";
import { get_series } from "./@resolvers/get-series";
import { get_series_filters } from "./@resolvers/get-series-filters";

export const series_queries = {
    get_my_series,
    get_series,
    get_series_filters,
};
