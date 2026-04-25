import { model, Model, Schema, Document } from "mongoose";
import { models_constant } from "../../../../configs/constant.configs";
import type { MovieSchema } from "./index.type";
import {
    create_update_timestamps,
    required_text,
    text,
    text_arr,
    required_num,
    ref_id,
    bool,
    num
} from "../../../../utils/mongo";

interface MovieSchemaDocument extends MovieSchema, Document { }

interface MovieSchemaModel extends Model<MovieSchemaDocument> { }

const movie_schema = new Schema<MovieSchemaDocument, MovieSchemaModel>(
    {
        title: required_text,
        director: text,
        description: text,
        genres: { ...text_arr, required: true },
        release_year: required_text,
        runtime: { ...required_num, default: 0 },
        language: text,
        origin_country: text,
        status: {
            type: String,
            required: true,
            enum: ["watchlist", "watching", "rewatching", "watched", "not_finished"],
            default: "watchlist",
        },
        rating: { ...required_num, default: 0, min: 0, max: 5 },
        review: text,
        poster_image: text,
        platform: required_text,
        started_from: text,
        finished_on: text,
        tmdb_id: num,
        original_title: text,
        poster_path: text,
        backdrop_path: text,
        adult: bool,
        video: bool,
        vote_average: num,
        vote_count: num,
        user_id: { ...ref_id(models_constant.user), required: true },
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
        ...create_update_timestamps,
    }
);

// Indexes for performance
movie_schema.index({ user_id: 1, status: 1, genres: 1 });
movie_schema.index({ user_id: 1, title: "text", director: "text" }, { language_override: "dummy" });

export const movie_model = model<MovieSchemaDocument, MovieSchemaModel>(
    models_constant.movie,
    movie_schema
);
