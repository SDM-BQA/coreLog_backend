import { config } from "dotenv"

config()

const is_production = process.env.is_production === "true" ? true : false
const mongo_uri = process.env.mongo_uri
const mongo_uri_dev = process.env.mongo_uri_dev
const port = Number(process.env.port) || 4001
const api_version = process.env.api_version || "v1"
const jwt_access_secret = process.env.JWT_ACCESS_SECRET || "default_secret"
const jwt_refresh_secret = process.env.JWT_REFRESH_SECRET || "default_secret"

export {
    is_production,
    mongo_uri,
    mongo_uri_dev,
    port,
    api_version,
    jwt_access_secret,
    jwt_refresh_secret
}