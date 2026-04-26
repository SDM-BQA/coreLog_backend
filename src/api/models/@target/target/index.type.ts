import type { Types } from "mongoose";

export interface TargetSchema {
    year: number;
    movies?: number;
    series?: number;
    books?: number;
    poems?: number;
    user_id: Types.ObjectId;
}
