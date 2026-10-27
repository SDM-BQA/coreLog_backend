import { model, Model, Schema, Document } from "mongoose";
import { models_constant } from "../../../../configs/constant.configs";
import type { JournalTemplateSchema } from "./index.type";
import {
    create_update_timestamps,
    required_text,
    text,
    ref_id,
} from "../../../../utils/mongo";

interface JournalTemplateSchemaDocument extends JournalTemplateSchema, Document {}
interface JournalTemplateSchemaModel extends Model<JournalTemplateSchemaDocument> {}

const journal_template_schema = new Schema<JournalTemplateSchemaDocument, JournalTemplateSchemaModel>(
    {
        name: required_text,
        content: required_text,
        category: text,
        user_id: { ...ref_id(models_constant.user), required: true },
    },
    {
        ...create_update_timestamps,
    }
);

journal_template_schema.index({ user_id: 1, updated_at: -1 });
journal_template_schema.index({ user_id: 1, name: "text", content: "text", category: "text" }, { language_override: "dummy" });

export const journal_template_model = model<JournalTemplateSchemaDocument, JournalTemplateSchemaModel>(
    models_constant.journal_template,
    journal_template_schema
);
