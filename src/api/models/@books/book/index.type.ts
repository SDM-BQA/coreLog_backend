import { IDBDefault, MIDType } from "../../index.type";

export interface BookSchema extends IDBDefault {
    title: string;
    author: string;
    description?: string;
    genres: string[];
    publication_year: string;
    status: "want_to_read" | "reading" | "read" | "not_finished";
    rating: number;
    review?: string;
    cover_image?: string;
    page_count?: number;
    publisher?: string;
    language?: string;
    started_from?: string;
    finished_on?: string;
    series_name?: string;
    series_number?: number;
    user_id: MIDType;
}
