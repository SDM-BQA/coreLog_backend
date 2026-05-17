import mongoose from "mongoose";
import connect_db from "../configs/database.config";
import { journal_model } from "../api/models/@journal/journal";

const ADDRESS = "Kundalahalli Colony, Brookefield, Bengaluru";
const CITY = "Bengaluru";
// Approx coordinates for Kundalahalli/Brookefield area
const LAT = 12.9676;
const LNG = 77.7158;

const run = async () => {
    try {
        await connect_db();

        const result = await journal_model.updateMany(
            {},
            {
                $set: {
                    location: CITY,
                    location_address: ADDRESS,
                    location_city: CITY,
                    location_lat: LAT,
                    location_lng: LNG,
                },
            }
        );

        console.log("Journal address migration complete");
        console.log(`Matched: ${result.matchedCount}, Updated: ${result.modifiedCount}`);
    } catch (error) {
        console.error("Journal address migration failed:", error);
        process.exitCode = 1;
    } finally {
        await mongoose.connection.close();
    }
};

run();

