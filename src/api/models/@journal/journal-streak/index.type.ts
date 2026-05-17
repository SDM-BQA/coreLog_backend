import { IDBDefault, MIDType } from "../../index.type";

export interface JournalStreakSchema extends IDBDefault {
    user_id: MIDType;
    current_streak: number;
    longest_streak: number;
    total_active_days: number;
    active_days_this_month: number;
    last_entry_date?: string;
    streak_updated_at?: string;
}

