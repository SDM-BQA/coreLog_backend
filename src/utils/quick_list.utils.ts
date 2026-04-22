import { Model, Document, QueryFilter } from "mongoose";

export interface QuickListFilter {
    // Pagination
    page?: number;
    limit?: number;

    // Generic text search: pass field names to search across, e.g. ["title", "author"]
    search?: string;
    search_fields?: string[];

    // Exact / $in matches: { status: ["read", "reading"], genres: ["Sci-Fi"] }
    match?: Record<string, string | number | boolean | string[] | number[]>;

    // Minimum value matches: { rating: 3 } → rating >= 3
    min?: Record<string, number>;

    // Fixed conditions merged into every query (e.g. { user_id: userId })
    base_query?: Record<string, any>;

    // Sort field and direction, defaults to { created_at: -1 }
    sort_by?: string;
    sort_dir?: 1 | -1;
}

export interface QuickListResult<T> {
    data: T[];
    total_count: number;
    current_page: number;
    per_page: number;
    page_count: number;
    has_next_page: boolean;
}

export async function quick_list<T extends Document>(
    model: Model<T>,
    filter: QuickListFilter = {},
): Promise<QuickListResult<T>> {
    const page  = Math.max(1, filter.page  ?? 1);
    const limit = Math.min(100, Math.max(1, filter.limit ?? 10));
    const skip  = (page - 1) * limit;

    const query: QueryFilter<T> = { ...(filter.base_query ?? {}) };

    // Text search across multiple fields using $or + regex
    if (filter.search?.trim() && filter.search_fields?.length) {
        const escaped = filter.search.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const regex   = new RegExp(escaped, "i");
        query.$or = filter.search_fields.map((field) => ({ [field]: regex })) as any;
    }

    // $in / exact matches
    if (filter.match) {
        for (const [field, value] of Object.entries(filter.match)) {
            if (value === undefined || value === null) continue;
            if (Array.isArray(value)) {
                if (value.length) query[field as keyof QueryFilter<T>] = { $in: value } as any;
            } else {
                query[field as keyof QueryFilter<T>] = value as any;
            }
        }
    }

    // >= comparisons
    if (filter.min) {
        for (const [field, value] of Object.entries(filter.min)) {
            if (value !== undefined && value !== null) {
                query[field as keyof QueryFilter<T>] = { $gte: value } as any;
            }
        }
    }

    const sort_field = filter.sort_by ?? "created_at";
    const sort_dir   = filter.sort_dir ?? -1;

    const [docs, total] = await Promise.all([
        model.find(query).sort({ [sort_field]: sort_dir }).skip(skip).limit(limit),
        model.countDocuments(query),
    ]);

    const page_count    = Math.max(1, Math.ceil(total / limit));
    const has_next_page = page < page_count;

    const data = docs.map((doc) => {
        const obj = doc.toObject() as any;
        if (obj.created_at instanceof Date) obj.created_at = obj.created_at.toISOString();
        if (obj.updated_at instanceof Date) obj.updated_at = obj.updated_at.toISOString();
        return obj as T;
    });

    return { data, total_count: total, current_page: page, per_page: limit, page_count, has_next_page };
}
