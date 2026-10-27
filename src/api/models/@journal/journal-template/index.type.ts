import type { Document, Types } from "mongoose";

export interface JournalTemplateSchema {
    name: string;
    content: string;
    category?: string;
    user_id: Types.ObjectId;
    created_at?: Date;
    updated_at?: Date;
}

export type JournalTemplateDocument = JournalTemplateSchema & Document;
