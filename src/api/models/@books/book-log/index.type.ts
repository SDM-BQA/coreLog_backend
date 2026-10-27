import { IDBDefault, MIDType } from "../../index.type";

export interface BookLogSchema extends IDBDefault {
    book_id: MIDType;
    user_id: MIDType;
    date: string;
    pages_read: number;
    current_page: number;
    note?: string;
}
