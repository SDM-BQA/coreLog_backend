import { model, Model, Schema, Document } from "mongoose";
import { models_constant } from "../../../../configs/constant.configs";
import type { SeriesLogSchema } from "./index.type";
import {
    create_update_timestamps,
    required_text,
    required_num,
    text,
    ref_id,
} from "../../../../utils/mongo";

interface SeriesLogSchemaDocument extends SeriesLogSchema, Document { }
interface SeriesLogSchemaModel extends Model<SeriesLogSchemaDocument> { }

const series_log_schema = new Schema<SeriesLogSchemaDocument, SeriesLogSchemaModel>(
    {
        series_id: { ...ref_id(models_constant.series), required: true },
        user_id: { ...ref_id(models_constant.user), required: true },
        date: required_text,
        episodes_watched: required_num,
        current_episode: required_num,
        note: text,
    },
    {
        ...create_update_timestamps,
    }
);

series_log_schema.index({ series_id: 1, date: 1 });

export const series_log_model = model<SeriesLogSchemaDocument, SeriesLogSchemaModel>(
    models_constant.series_log,
    series_log_schema
);
