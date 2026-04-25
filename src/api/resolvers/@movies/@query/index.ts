import { get_my_movies } from "./@resolvers/get-my-movies";
import { get_movie } from "./@resolvers/get-movie";
import { get_movie_filters } from "./@resolvers/get-movie-filters";

export const movies_queries = {
    get_my_movies,
    get_movie,
    get_movie_filters,
};
