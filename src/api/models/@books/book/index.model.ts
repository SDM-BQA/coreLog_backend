import { model, Model, Schema, Document } from "mongoose";
import { models_constant } from "../../../../configs/constant.configs";
import type { BookSchema } from "./index.type";
import {
    create_update_timestamps,
    required_text,
    text,
    text_arr,
    required_num,
    ref_id,
} from "../../../../utils/mongo";

interface BookSchemaDocument extends BookSchema, Document { }

interface BookSchemaModel extends Model<BookSchemaDocument> { }

const book_schema = new Schema<BookSchemaDocument, BookSchemaModel>(
    {
        title: required_text,
        author: required_text,
        description: text,
        genres: { ...text_arr, required: true },
        publication_year: required_text,
        status: {
            type: String,
            required: true,
            enum: ["want_to_read", "reading", "read", "not_finished"],
            default: "want_to_read",
        },
        rating: { ...required_num, default: 0, min: 0, max: 5 },
        review: text,
        cover_image: text,
        page_count: { type: Number, default: 0 },
        publisher: text,
        language: text,
        started_from: text,
        finished_on: text,
        series_name: text,
        series_number: { type: Number, default: null },
        user_id: { ...ref_id(models_constant.user), required: true },
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
        ...create_update_timestamps,
    }
);

// Compound index for the server-side filtered query: user_id is always present,
// status + genres are the most-used filters, title for text search fallback.
book_schema.index({ user_id: 1, status: 1, genres: 1 });
book_schema.index({ user_id: 1, title: "text", author: "text" });

export const book_model = model<BookSchemaDocument, BookSchemaModel>(
    models_constant.book,
    book_schema
);
