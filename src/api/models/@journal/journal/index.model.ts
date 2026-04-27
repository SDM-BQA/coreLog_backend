import { model, Model, Schema, Document } from "mongoose";
import { models_constant } from "../../../../configs/constant.configs";
import type { JournalSchema } from "./index.type";
import {
    create_update_timestamps,
    required_text,
    text,
    text_arr,
    false_bool,
    ref_id,
} from "../../../../utils/mongo";

interface JournalSchemaDocument extends JournalSchema, Document {}
interface JournalSchemaModel extends Model<JournalSchemaDocument> {}

const journal_schema = new Schema<JournalSchemaDocument, JournalSchemaModel>(
    {
        title: required_text,
        content: required_text,
        description: text,
        journal_type: { type: String, required: true, default: "personal" },
        mood: text,
        location: required_text,
        photos: text_arr,
        video: text,
        tags: text_arr,
        date: required_text,
        time: required_text,
        is_favorite: { ...false_bool, required: true },
        user_id: { ...ref_id(models_constant.user), required: true },
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
        ...create_update_timestamps,
    }
);

journal_schema.index({ user_id: 1, journal_type: 1, date: -1 });
journal_schema.index({ user_id: 1, title: "text", content: "text" }, { language_override: "dummy" });

export const journal_model = model<JournalSchemaDocument, JournalSchemaModel>(
    models_constant.journal,
    journal_schema
);
