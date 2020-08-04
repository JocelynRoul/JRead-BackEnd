import 'reflect-metadata';
import express from 'express';
import indexRouter from './router/index';
import dotenv from 'dotenv';
import connection from './config/DBConnection';
import cors from 'cors';

dotenv.config()
const app = express();

app.use(cors());
app.use('/', indexRouter);

connection.then(() => {
    app.listen(process.env.PORT);
}).catch();