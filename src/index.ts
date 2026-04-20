import express from "express";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";
import typeDefs from "./api/type-defs";
import resolvers from "./api/resolvers";
import connect_db from "./configs/database.config";
import * as configs from "./configs/env.config";
import { server_start_format } from "./constants/template-literals";
import { BaseContext } from "@apollo/server";
import { playground } from "./playground";
import { makeExecutableSchema } from "@graphql-tools/schema";
import path from "path";
import { upload, handleImageUpload } from "./utils/file-upload.utils";



const app = express();
const GQL_URL = `/${configs.api_version}/graphql`;

// Global CORS configuration
app.use(cors({
    origin: "*", 
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "apollo-require-preflight", "x-client-id", "x-client-secret", "x-client-type"]
}));

interface MyContext extends BaseContext {
    req: express.Request;
}


async function bootstrap() {
    const schema = makeExecutableSchema({ typeDefs, resolvers });
    const server = new ApolloServer<MyContext>({
        schema
    });

    await server.start();

    app.get("/", (_req, res) => {
        res.json("MERN Backend Running... YEAHHHH BABBYYY!");
    });

    // Static folder for uploaded images
    app.use(express.static(path.join(process.cwd(), "public")));
    app.use("/uploads", express.static(path.join(process.cwd(), "public", "uploads")));

    // Dedicated upload route
    app.post(`/${configs.api_version}/upload`, upload.single("image"), handleImageUpload);


    app.use(
        GQL_URL,
        express.json({ limit: "10mb" }),
        expressMiddleware<MyContext>(server, {
            context: async ({ req }) => {
                return {
                    req
                };
            }
        })
    );

    app.listen({ port: configs.port }, () => {
        console.log(server_start_format(configs.port, configs.api_version));
    });
}

console.log("connecting to DB...");
connect_db().then(async () => {
    try {
        await bootstrap()
        playground()
    } catch (err) {
        console.log(err);

    }
})