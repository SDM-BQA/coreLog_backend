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

const expense_item_schema = new Schema(
    {
        id: { type: String, required: true },
        amount: { type: Number, required: true },
        note: { type: String, required: true },
        category: text,
    },
    { _id: false }
);

const template_block_schema = new Schema(
    {
        id: { type: String, required: true },
        type: { type: String, required: true },
        title: { type: String, required: true },
        items: { type: [expense_item_schema], default: [] },
    },
    { _id: false }
);

const journal_schema = new Schema<JournalSchemaDocument, JournalSchemaModel>(
    {
        title: required_text,
        content: required_text,
        description: text,
        journal_type: { type: String, required: true, default: "personal" },
        mood: text,
        location: required_text,
        location_address: text,
        location_city: text,
        location_lat: Number,
        location_lng: Number,
        photos: text_arr,
        video: text,
        tags: text_arr,
        template_blocks: { type: [template_block_schema], default: [] },
        date: required_text,
        time: required_text,
        is_favorite: { ...false_bool, required: true },
        user_id: { ...ref_id(models_constant.user), required: true },
    },
    {
        ...create_update_timestamps,
    }
);

journal_schema.index({ user_id: 1, journal_type: 1, date: -1 });
journal_schema.index({ user_id: 1, title: "text", content: "text" }, { language_override: "dummy" });

export const journal_model = model<JournalSchemaDocument, JournalSchemaModel>(
    models_constant.journal,
    journal_schema
);
