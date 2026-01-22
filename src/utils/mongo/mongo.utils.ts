import { Schema } from "mongoose";
import { ModelNames } from "../../configs/constant.configs";

/**
 * ----------------------------------------------------
 * Primitive shorthand types
 * ----------------------------------------------------
 * These exports provide readable aliases for common
 * Mongoose / JavaScript primitive types.
 */
export const text = String;
export const num = Number;
export const bool = Boolean;
export const date = Date;
export const obj = Object;
export const arr = Array;
export const mixed = Schema.Types.Mixed;
export const ID = Schema.Types.ObjectId;

/**
 * ----------------------------------------------------
 * Required field definitions
 * ----------------------------------------------------
 * Commonly used required field configurations to
 * reduce repetition across schemas.
 */
export const required_text = { type: String, required: true };
export const required_num = { type: Number, required: true };
export const required_bool = { type: Boolean, required: true };
export const required_date = { type: Date, required: true };

/**
 * ----------------------------------------------------
 * Default value field definitions
 * ----------------------------------------------------
 * Used when fields should always have a default value.
 */
export const empty_text = { type: String, default: "" };
export const false_bool = { type: Boolean, default: false };
export const true_bool = { type: Boolean, default: true };

/**
 * ----------------------------------------------------
 * Unique field definitions
 * ----------------------------------------------------
 * Intended for identifiers such as emails, phone
 * numbers, or reference codes.
 * Note: `unique` creates an index, not a validator.
 */
export const unique_text = { type: String, required: false, unique: true };
export const unique_num = { type: Number, required: false, unique: true };

/**
 * ----------------------------------------------------
 * Sub-schema helpers
 * ----------------------------------------------------
 * These helpers make intent explicit when embedding
 * objects or arrays of objects inside a schema.
 */
export const sub_schema = (schema: any) => {
    return schema;
};

export const sub_schema_arr = (schema: any) => {
    return [schema];
};

/**
 * ----------------------------------------------------
 * Array field definitions
 * ----------------------------------------------------
 * Standardized array type declarations.
 */
export const text_arr = { type: [String] };
export const num_arr = { type: [Number] };
export const bool_arr = { type: [Boolean] };
export const date_arr = { type: [Date] };
export const mixed_arr = { type: [Schema.Types.Mixed] };

/**
 * ----------------------------------------------------
 * Reference field helper
 * ----------------------------------------------------
 * Creates a MongoDB ObjectId reference to another
 * model defined in ModelNames.
 */
export const ref_id = (ref: ModelNames) => ({
    type: Schema.Types.ObjectId,
    ref: ref,
});

/**
 * ----------------------------------------------------
 * Timestamp configurations
 * ----------------------------------------------------
 * Centralized timestamp options to enforce consistent
 * field naming across all schemas.
 */
export const create_update_timestamps = {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
};

export const create_timestamps = {
    timestamps: { createdAt: "created_at" },
};

export const update_timestamps = {
    timestamps: { updatedAt: "updated_at" },
};
