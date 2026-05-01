import { create_series } from "./@resolvers/create-series";
import { update_series } from "./@resolvers/update-series";
import { delete_series } from "./@resolvers/delete-series";
import { add_series_log } from "./@resolvers/add-series-log";
import { delete_series_log } from "./@resolvers/delete-series-log";

export const series_mutations = {
    create_series,
    update_series,
    delete_series,
    add_series_log,
    delete_series_log,
};
