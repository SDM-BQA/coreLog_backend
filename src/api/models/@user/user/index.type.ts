import { IDBDefault, MIDType } from "../../index.type";

interface Library {
    books: MIDType[];
    movies: MIDType[];
    series: MIDType[];
}

interface ProfileInfo{
    profile_pic?: string;
    user_name: string;
    first_name: string;
    last_name: string;
    email_id: string;
    mobile_no?: string;
    password: string;
    gender?: 'male' | 'female' | 'other' | 'N/A';
    otp_code?: string;
    otp_expires_at?: Date;
    library: Library;
}

export type UserSchema = ProfileInfo & IDBDefault