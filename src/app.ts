import 'reflect-metadata';
import express from 'express';
import indexRouter from './router/index';
import dotenv from 'dotenv';
import connection from './config/DBConnection';

dotenv.config()
const app = express();

app.use('/', indexRouter);

connection.then(() => {
    app.listen(process.env.PORT);
}).catch();