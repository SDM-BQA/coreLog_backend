import type { Document, Types } from "mongoose";

export interface JournalSchema {
    title: string;
    content: string;
    description?: string;
    journal_type: string;
    mood?: string;
    location: string;
    photos?: string[];
    video?: string;
    tags?: string[];
    date: string;
    time: string;
    is_favorite: boolean;
    user_id: Types.ObjectId;
    created_at?: Date;
    updated_at?: Date;
}

export type JournalDocument = JournalSchema & Document;
