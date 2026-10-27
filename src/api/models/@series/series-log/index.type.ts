import { IDBDefault, MIDType } from "../../index.type";

export interface SeriesLogSchema extends IDBDefault {
    series_id: MIDType;
    user_id: MIDType;
    date: string;
    episodes_watched: number;
    current_episode: number;
    note?: string;
}
