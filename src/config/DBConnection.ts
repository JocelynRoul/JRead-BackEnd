import "reflect-metadata";
import dotenv from "dotenv";
import {createConnection} from "typeorm";

import Webtoon from "../models/Webtoon";

dotenv.config()

const connection = createConnection({
    type: "postgres",
    host: process.env.PGHOST,
    port: 5432,
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    schema: 'JRead',
    entities: [Webtoon],
    logging: false
});

export default connection;