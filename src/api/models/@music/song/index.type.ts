import type { Types } from "mongoose";

export interface SongSchema {
    title: string;
    artist: string;
    artist_type: "solo" | "band";
    album_name?: string;
    cover_image?: string;
    description?: string;
    genres: string[];
    release_year: string;
    duration_ms?: number;
    language?: string;
    platform?: string;
    status: "wishlist" | "listened";
    rating: number;
    review?: string;
    preview_url?: string;
    itunes_id?: string;
    started_from?: string;
    finished_on?: string;
    user_id: Types.ObjectId;
}
