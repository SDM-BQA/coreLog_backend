import { model, Model, Schema, Document } from "mongoose";
import { models_constant } from "../../../../configs/constant.configs";
import type { UserSchema } from "./index.type";
import {
    create_update_timestamps,
    required_text,
    text,
    unique_text,
} from "../../../../utils/mongo";
import { toTitleCase } from "../../../../utils/misc/case.utils";
import { Encryption } from "../../../../utils/misc/encryption.utils";

interface UserSchemaDocument extends UserSchema, Document { }

interface UserSchemaModel extends Model<UserSchemaDocument> { }

const user_schema = new Schema<UserSchemaDocument, UserSchemaModel>(
    {
        user_name: unique_text,
        first_name: required_text,
        last_name: required_text,
        profile_pic: text,
        email_id: unique_text,
        mobile_no: unique_text,
        password: required_text,
        gender: text,
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
        ...create_update_timestamps,
    },

);

user_schema.pre("save", async function () {
    if (!this.isModified("password")) return;
    this.password = await Encryption.hash_password(this.password!);
});

user_schema.virtual("full_name").get(function () {
    return toTitleCase(`${this.first_name || ""} ${this.last_name || ""}`.trim());
});

export const user_model = model<UserSchemaDocument, UserSchemaModel>(
    models_constant.user,
    user_schema,
);
