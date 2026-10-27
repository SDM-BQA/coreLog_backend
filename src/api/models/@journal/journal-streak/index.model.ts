import { model, Model, Schema, Document } from "mongoose";
import { models_constant } from "../../../../configs/constant.configs";
import type { JournalStreakSchema } from "./index.type";
import { create_update_timestamps, text, ref_id } from "../../../../utils/mongo";

interface JournalStreakSchemaDocument extends JournalStreakSchema, Document {}
interface JournalStreakSchemaModel extends Model<JournalStreakSchemaDocument> {}

const journal_streak_schema = new Schema<JournalStreakSchemaDocument, JournalStreakSchemaModel>(
    {
        user_id: { ...ref_id(models_constant.user), required: true, unique: true },
        current_streak: { type: Number, required: true, default: 0 },
        longest_streak: { type: Number, required: true, default: 0 },
        total_active_days: { type: Number, required: true, default: 0 },
        active_days_this_month: { type: Number, required: true, default: 0 },
        last_entry_date: text,
        streak_updated_at: text,
    },
    {
        ...create_update_timestamps,
    }
);

journal_streak_schema.index({ user_id: 1 }, { unique: true });

export const journal_streak_model = model<JournalStreakSchemaDocument, JournalStreakSchemaModel>(
    models_constant.journal_streak,
    journal_streak_schema
);
