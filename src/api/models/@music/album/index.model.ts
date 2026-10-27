import { model, Model, Schema, Document } from "mongoose";
import { models_constant } from "../../../../configs/constant.configs";
import type { AlbumSchema } from "./index.type";
import {
    create_update_timestamps,
    required_text,
    text,
    text_arr,
    required_num,
    num,
    ref_id,
} from "../../../../utils/mongo";

interface AlbumSchemaDocument extends AlbumSchema, Document {}
interface AlbumSchemaModel extends Model<AlbumSchemaDocument> {}

const album_schema = new Schema<AlbumSchemaDocument, AlbumSchemaModel>(
    {
        title: required_text,
        artist: required_text,
        artist_type: {
            type: String,
            required: true,
            enum: ["solo", "band"],
            default: "solo",
        },
        cover_image: text,
        description: text,
        genres: { ...text_arr, required: true },
        release_year: required_text,
        total_tracks: num,
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
        itunes_id: text,
        user_id: { ...ref_id(models_constant.user), required: true },
    },
    {
        ...create_update_timestamps,
    }
);

album_schema.index({ user_id: 1, status: 1, genres: 1 });
album_schema.index({ user_id: 1, title: "text", artist: "text" }, { language_override: "dummy" });

export const album_model = model<AlbumSchemaDocument, AlbumSchemaModel>(
    models_constant.album,
    album_schema
);
