import mongoose from "mongoose";
import {is_production,  mongo_uri, mongo_uri_dev } from "./env.config"

const db_uri = is_production ? mongo_uri : mongo_uri_dev

const connect_db = async() => {
    try {
        if (mongoose.connection.readyState === 0) {
            console.log("CURRENT_DB: disconnected");
            
        } else if (mongoose.connection.readyState === 1) {
            console.log("CURRENT_DB: connecting...");
        } else if (mongoose.connection.readyState === 2) {
            console.log("CURRENT_DB: connected!!!!");
        } else if (mongoose.connection.readyState === 3) {
            console.log("CURRENT_DB: disconnecting...");
        }

        if(!db_uri) throw new Error("Mongo Uri Not Defined")
        await mongoose.connect(db_uri!)
        console.log("📊 MongoDB Connected");
        
    } catch (err) {
        console.error("Mongo Connection Error: ", err)
   }
}

export default connect_db