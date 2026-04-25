import { model, Model, Schema, Document } from "mongoose";
import { models_constant } from "../../../../configs/constant.configs";
import type { PoemSchema } from "./index.type";
import {
    create_update_timestamps,
    required_text,
    text,
    text_arr,
    ref_id
} from "../../../../utils/mongo";

interface PoemSchemaDocument extends PoemSchema, Document { }

interface PoemSchemaModel extends Model<PoemSchemaDocument> { }

const poem_schema = new Schema<PoemSchemaDocument, PoemSchemaModel>(
    {
        title: required_text,
        content: required_text,
        language: required_text,
        poem_type: required_text,
        mood: text,
        atmosphere: text,
        tags: text_arr,
        cover_image: text,
        status: {
            type: String,
            required: true,
            enum: ["draft", "finished", "published", "archived"],
            default: "draft",
        },
        user_id: { ...ref_id(models_constant.user), required: true },
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
        ...create_update_timestamps,
    }
);

// Indexes for performance
poem_schema.index({ user_id: 1, status: 1, poem_type: 1 });
poem_schema.index({ user_id: 1, title: "text", content: "text" }, { language_override: "dummy" });

export const poem_model = model<PoemSchemaDocument, PoemSchemaModel>(
    models_constant.poem,
    poem_schema
);
