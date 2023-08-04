import express from 'express';
import cors from 'cors';
import compression from "compression";
import environment from './config/environment';
import {createServer} from "http";
import Database from "./lib/database";

// Environment variables
if (process.env.NODE_ENV !== 'production') {
    const env =  environment;
    console.log(env);
}

async function main() {
    const app = express();

    app.use(cors());
    app.use(compression());
    await Database();

    app.get('/', (req, res) => {
        res.send('Hello World!');
    });

    const httpServer = createServer(app);
    const PORT = process.env.PORT|| 3000;

    httpServer.listen({port: PORT}, () => {
        console.log(`🚀 Server ready at http://localhost:${PORT}`);
    })
}

main();