import type { Types } from "mongoose";

export interface AlbumSchema {
    title: string;
    artist: string;
    artist_type: "solo" | "band";
    cover_image?: string;
    description?: string;
    genres: string[];
    release_year: string;
    total_tracks?: number;
    language?: string;
    platform?: string;
    status: "wishlist" | "listened";
    rating: number;
    review?: string;
    itunes_id?: string;
    user_id: Types.ObjectId;
}
