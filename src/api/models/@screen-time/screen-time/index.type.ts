import type { Document, Types } from "mongoose";

export interface ScreenTimeCategoryUsageSchema {
    name: string;
    minutes: number;
}

export interface ScreenTimeAppUsageSchema {
    app_name: string;
    minutes: number;
}

export interface ScreenTimeSchema {
    entry_date: string;
    total_minutes: number;
    raw_text?: string;
    categories?: ScreenTimeCategoryUsageSchema[];
    apps?: ScreenTimeAppUsageSchema[];
    user_id: Types.ObjectId;
    created_at?: Date;
    updated_at?: Date;
}

export type ScreenTimeDocument = ScreenTimeSchema & Document;
