import mongoose from "mongoose";
import {is_production,  mongo_uri, mongo_uri_dev } from "./env.config"

const db_uri = is_production ? mongo_uri : mongo_uri_dev

const connect_db = async() => {
    if(!db_uri) throw new Error("Mongo Uri Not Defined")
    await mongoose.connect(db_uri)
    console.log("📊 MongoDB Connected");
}

export default connect_db