import { model, Model, Schema, Document } from "mongoose";
import { models_constant } from "../../../../configs/constant.configs";
import type { TargetSchema } from "./index.type";
import {
    create_update_timestamps,
    required_num,
    ref_id,
    num,
} from "../../../../utils/mongo";

interface TargetSchemaDocument extends TargetSchema, Document {}

interface TargetSchemaModel extends Model<TargetSchemaDocument> {}

const target_schema = new Schema<TargetSchemaDocument, TargetSchemaModel>(
    {
        year:    { ...required_num },
        movies:  { ...num },
        series:  { ...num },
        books:   { ...num },
        poems:   { ...num },
        user_id: { ...ref_id(models_constant.user), required: true },
    },
    {
        toJSON:  { virtuals: true },
        toObject: { virtuals: true },
        ...create_update_timestamps,
    }
);

target_schema.index({ user_id: 1, year: 1 }, { unique: true });

export const target_model = model<TargetSchemaDocument, TargetSchemaModel>(
    models_constant.target,
    target_schema
);
