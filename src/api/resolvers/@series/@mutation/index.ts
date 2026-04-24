import { create_series } from "./@resolvers/create-series";
import { update_series } from "./@resolvers/update-series";
import { delete_series } from "./@resolvers/delete-series";

export const series_mutations = {
    create_series,
    update_series,
    delete_series,
};
