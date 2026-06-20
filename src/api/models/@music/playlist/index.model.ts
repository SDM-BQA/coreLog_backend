import { model, Model, Schema, Document } from "mongoose";
import { models_constant } from "../../../../configs/constant.configs";
import type { PlaylistSchema } from "./index.type";
import {
    create_update_timestamps,
    required_text,
    text,
    ref_id,
    ID,
} from "../../../../utils/mongo";

interface PlaylistSchemaDocument extends PlaylistSchema, Document {}
interface PlaylistSchemaModel extends Model<PlaylistSchemaDocument> {}

const playlist_item_schema = new Schema(
    {
        item_id: { type: ID, required: true },
        item_type: { type: String, required: true, enum: ["song", "album"] },
        added_at: { type: String, required: true },
    },
    { _id: false }
);

const smart_filter_schema = new Schema(
    {
        artist: text,
        genre: text,
        year: text,
    },
    { _id: false }
);

const playlist_schema = new Schema<PlaylistSchemaDocument, PlaylistSchemaModel>(
    {
        name: required_text,
        description: text,
        type: {
            type: String,
            required: true,
            enum: ["manual", "smart"],
            default: "manual",
        },
        smart_filter: smart_filter_schema,
        items: { type: [playlist_item_schema], default: [] },
        user_id: { ...ref_id(models_constant.user), required: true },
    },
    {
        ...create_update_timestamps,
    }
);

playlist_schema.index({ user_id: 1, type: 1 });

export const playlist_model = model<PlaylistSchemaDocument, PlaylistSchemaModel>(
    models_constant.playlist,
    playlist_schema
);
