import type { Document, Types } from "mongoose";

export interface SeriesSchema {
    title: string;
    creator: string;
    description?: string;
    genres: string[];
    release_year: string;
    seasons: number;
    status: "watchlist" | "watching" | "rewatching" | "watched" | "not_finished";
    rating: number;
    review?: string;
    poster_image?: string;
    platform?: string;
    started_from?: string;
    finished_on?: string;
    user_id: Types.ObjectId;
}
