import type { Types } from "mongoose";

export interface PlaylistSmartFilter {
    artist?: string;
    genre?: string;
    year?: string;
}

export interface PlaylistItem {
    item_id: Types.ObjectId;
    item_type: "song" | "album";
    added_at: string;
}

export interface PlaylistSchema {
    name: string;
    description?: string;
    type: "manual" | "smart";
    smart_filter?: PlaylistSmartFilter;
    items: PlaylistItem[];
    user_id: Types.ObjectId;
}
