import bcrypt from "bcryptjs";

/**
 * ----------------------------------------------------
 * Password utility
 * ----------------------------------------------------
 * Responsible only for hashing and verifying passwords.
 * Uses bcrypt for one-way secure hashing.
 */
export class Encryption {
    private static readonly SALT_ROUNDS = 10;

    /**
     * Hash a plain-text password.
     */
    static async hash_password(password: string): Promise<string> {
        return bcrypt.hash(password, this.SALT_ROUNDS);
    }

    /**
     * Verify a password against an existing hash.
     */
    static async verify_password(
        password: string,
        hash: string
    ): Promise<boolean> {
        return bcrypt.compare(password, hash);
    }
}
