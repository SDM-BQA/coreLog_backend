import jwt, { JwtPayload } from "jsonwebtoken";
import {
    jwt_access_secret,
    jwt_refresh_secret,
} from "../configs/env.config";

interface TokenPayload extends JwtPayload {
    userId: string;
}

export const sign_access_token = (payload: TokenPayload) => {
    return jwt.sign(payload, jwt_access_secret, {
        expiresIn: "15m",
    });
};

export const sign_refresh_token = (payload: TokenPayload) => {
    return jwt.sign(payload, jwt_refresh_secret, {
        expiresIn: "7d",
    });
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
