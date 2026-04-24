import type { Document, Types } from "mongoose";

export interface MovieSchema {
    title: string;
    director: string;
    description?: string;
    genres: string[];
    release_year: string;
    runtime: number;
    language: string;
    origin_country: string;
    status: "watchlist" | "watching" | "rewatching" | "watched" | "not_finished";
    rating: number;
    review?: string;
    poster_image?: string;
    platform?: string;
    started_from?: string;
    finished_on?: string;
    tmdb_id?: number;
    original_title?: string;
    poster_path?: string;
    backdrop_path?: string;
    adult?: boolean;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
    user_id: Types.ObjectId;
}
