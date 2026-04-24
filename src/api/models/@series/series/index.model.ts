import { model, Model, Schema, Document } from "mongoose";
import { models_constant } from "../../../../configs/constant.configs";
import type { SeriesSchema } from "./index.type";
import {
    create_update_timestamps,
    required_text,
    text,
    text_arr,
    required_num,
    ref_id,
} from "../../../../utils/mongo";

interface SeriesSchemaDocument extends SeriesSchema, Document { }

interface SeriesSchemaModel extends Model<SeriesSchemaDocument> { }

const series_schema = new Schema<SeriesSchemaDocument, SeriesSchemaModel>(
    {
        title: required_text,
        creator: text,
        description: text,
        genres: { ...text_arr, required: true },
        release_year: required_text,
        seasons: { ...required_num, default: 1 },
        episodes: { ...required_num, default: 0 },
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
        user_id: { ...ref_id(models_constant.user), required: true },
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
        ...create_update_timestamps,
    }
);

// Indexes for performance
series_schema.index({ user_id: 1, status: 1, genres: 1 });
series_schema.index({ user_id: 1, title: "text", creator: "text" }, { language_override: "dummy" });

export const series_model = model<SeriesSchemaDocument, SeriesSchemaModel>(
    models_constant.series,
    series_schema
);
