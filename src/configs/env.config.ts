import { config } from "dotenv"

config()

const is_production = process.env.is_production ? true : false
const mongo_uri = process.env.mongo_uri
const mongo_uri_dev = process.env.mongo_uri_dev
const port = Number(process.env.port) || 4001
const api_version = process.env.api_version || "v1"

export {
    is_production,
    mongo_uri,
    mongo_uri_dev,
    port,
    api_version
}