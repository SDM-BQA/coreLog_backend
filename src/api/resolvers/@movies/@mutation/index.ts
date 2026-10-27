import { create_movie } from "./@resolvers/create-movie";
import { update_movie } from "./@resolvers/update-movie";
import { delete_movie } from "./@resolvers/delete-movie";

export const movies_mutations = {
    create_movie,
    update_movie,
    delete_movie,
};
