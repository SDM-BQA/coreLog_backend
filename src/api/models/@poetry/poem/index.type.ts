import type { Document, Types } from "mongoose";

export interface PoemSchema {
    title: string;
    content: string;
    language: string;
    poem_type: string;
    mood?: string;
    atmosphere?: string;
    tags?: string[];
    cover_image?: string;
    status: "draft" | "finished" | "published" | "archived";
    user_id: Types.ObjectId;
    created_at?: Date;
    updated_at?: Date;
}

export type PoemDocument = PoemSchema & Document;
