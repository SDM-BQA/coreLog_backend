import { model, Model, Schema, Document } from "mongoose";
import { models_constant } from "../../../../configs/constant.configs";
import type { SongSchema } from "./index.type";
import {
    create_update_timestamps,
    required_text,
    text,
    text_arr,
    required_num,
    num,
    ref_id,
} from "../../../../utils/mongo";

interface SongSchemaDocument extends SongSchema, Document {}
interface SongSchemaModel extends Model<SongSchemaDocument> {}

const song_schema = new Schema<SongSchemaDocument, SongSchemaModel>(
    {
        title: required_text,
        artist: required_text,
        artist_type: {
            type: String,
            required: true,
            enum: ["solo", "band"],
            default: "solo",
        },
        album_name: text,
        cover_image: text,
        description: text,
        genres: { ...text_arr, required: true },
        release_year: required_text,
        duration_ms: num,
        language: text,
        platform: text,
        status: {
            type: String,
            required: true,
            enum: ["wishlist", "listened"],
            default: "wishlist",
        },
        rating: { ...required_num, default: 0, min: 0, max: 10 },
        review: text,
        preview_url: text,
        itunes_id: text,
        started_from: text,
        finished_on: text,
        user_id: { ...ref_id(models_constant.user), required: true },
    },
    {
        ...create_update_timestamps,
    }
);

song_schema.index({ user_id: 1, status: 1, genres: 1 });
song_schema.index({ user_id: 1, title: "text", artist: "text" }, { language_override: "dummy" });

export const song_model = model<SongSchemaDocument, SongSchemaModel>(
    models_constant.song,
    song_schema
);
