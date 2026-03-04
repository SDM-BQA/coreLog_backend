import { IDBDefault } from "../../index.type";

interface ProfileInfo{
    profile_pic?: string;
    user_name: string;
    first_name: string;
    last_name: string;
    email_id: string;
    mobile_no?: string;
    password: string;
    gender?: 'male' | 'female' | 'other' | 'N/A'
}

export type UserSchema = ProfileInfo & IDBDefault