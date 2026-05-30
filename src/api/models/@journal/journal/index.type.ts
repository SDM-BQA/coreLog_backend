import type { Document, Types } from "mongoose";

export interface JournalExpenseItemSchema {
    id: string;
    amount: number;
    note: string;
    category?: string;
}

export interface JournalTemplateBlockSchema {
    id: string;
    type: "expenses" | string;
    title: string;
    items?: JournalExpenseItemSchema[];
}

export interface JournalSchema {
    title: string;
    content: string;
    description?: string;
    journal_type: string;
    mood?: string;
    location: string;
    location_address?: string;
    location_city?: string;
    location_lat?: number;
    location_lng?: number;
    photos?: string[];
    video?: string;
    tags?: string[];
    template_blocks?: JournalTemplateBlockSchema[];
    date: string;
    time: string;
    is_favorite: boolean;
    user_id: Types.ObjectId;
    created_at?: Date;
    updated_at?: Date;
}

export type JournalDocument = JournalSchema & Document;
