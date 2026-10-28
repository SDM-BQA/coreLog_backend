import jwt, { JwtPayload, SignOptions } from "jsonwebtoken";
import {
    jwt_access_secret,
    jwt_refresh_secret,
} from "../configs/env.config";

interface TokenPayload extends JwtPayload {
    userId: string;
}

export const sign_access_token = (payload: TokenPayload, expiresIn: SignOptions["expiresIn"] = "2d") => {
    return jwt.sign(payload, jwt_access_secret, { expiresIn });
};

export const sign_refresh_token = (payload: TokenPayload, expiresIn: SignOptions["expiresIn"] = "7d") => {
    return jwt.sign(payload, jwt_refresh_secret, { expiresIn });
};

export const verify_access_token = (token: string): TokenPayload | null => {
    try {
        return jwt.verify(token, jwt_access_secret) as TokenPayload;
    } catch {
        return null;
    }
};

export const verify_refresh_token = (token: string): TokenPayload | null => {
    try {
        return jwt.verify(token, jwt_refresh_secret) as TokenPayload;
    } catch {
        return null;
    }
};
