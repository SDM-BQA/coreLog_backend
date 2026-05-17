import { model, Model, Schema, Document } from "mongoose";
import { models_constant } from "../../../../configs/constant.configs";
import type { BookLogSchema } from "./index.type";
import {
    create_update_timestamps,
    required_text,
    required_num,
    text,
    ref_id,
} from "../../../../utils/mongo";

interface BookLogSchemaDocument extends BookLogSchema, Document { }
interface BookLogSchemaModel extends Model<BookLogSchemaDocument> { }

const book_log_schema = new Schema<BookLogSchemaDocument, BookLogSchemaModel>(
    {
        book_id: { ...ref_id(models_constant.book), required: true },
        user_id: { ...ref_id(models_constant.user), required: true },
        date: required_text,
        pages_read: required_num,
        current_page: required_num,
        note: text,
    },
    {
        ...create_update_timestamps,
    }
);

book_log_schema.index({ book_id: 1, date: 1 });

export const book_log_model = model<BookLogSchemaDocument, BookLogSchemaModel>(
    models_constant.book_log,
    book_log_schema
);
