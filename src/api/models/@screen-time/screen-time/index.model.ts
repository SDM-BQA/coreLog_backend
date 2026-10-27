import { model, Model, Schema, Document } from "mongoose";
import { models_constant } from "../../../../configs/constant.configs";
import type { ScreenTimeSchema } from "./index.type";
import {
    create_update_timestamps,
    required_text,
    required_num,
    text,
    ref_id,
} from "../../../../utils/mongo";

interface ScreenTimeSchemaDocument extends ScreenTimeSchema, Document {}
interface ScreenTimeSchemaModel extends Model<ScreenTimeSchemaDocument> {}

const category_usage_schema = new Schema(
    {
        name: required_text,
        minutes: { ...required_num, min: 0 },
    },
    { _id: false }
);

const app_usage_schema = new Schema(
    {
        app_name: required_text,
        minutes: { ...required_num, min: 0 },
    },
    { _id: false }
);

const screen_time_schema = new Schema<ScreenTimeSchemaDocument, ScreenTimeSchemaModel>(
    {
        entry_date: required_text,
        total_minutes: { ...required_num, min: 0, default: 0 },
        raw_text: text,
        categories: { type: [category_usage_schema], default: [] },
        apps: { type: [app_usage_schema], default: [] },
        user_id: { ...ref_id(models_constant.user), required: true },
    },
    {
        ...create_update_timestamps,
    }
);

screen_time_schema.index({ user_id: 1, entry_date: 1 }, { unique: true });
screen_time_schema.index({ user_id: 1, entry_date: -1 });

export const screen_time_model = model<ScreenTimeSchemaDocument, ScreenTimeSchemaModel>(
    models_constant.screen_time,
    screen_time_schema
);
