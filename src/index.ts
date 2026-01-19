import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import helmet from "helmet";
import { port } from "./configs/env.config";
import { playground } from "./playground";
import connect_db from "./configs/database.config";

const app = express()


// middleware
app.use(cors({ origin: "http://localhost:4001" }))
app.use(helmet())
app.use(express.json({ limit: "10mb" }))

// test
app.get('/', (req, res) => {
    res.json('MERN Backend Running... YEAHHHH BABBYYY!')
})


connect_db()
    .then(() => {
        try {
            app.listen(port, () => {
                console.log(`Server Running On Port ${port}`);
            })
        } catch (err) {
            console.error(err)
        } finally {
            playground()
        }
    })

