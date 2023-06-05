import express from 'express';
import morgan from 'morgan';
import './config.js';
import categoriesRouter from './src/categories/index.js';
import { errorHandlerMiddleware } from './src/middleware/index.js';

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/categories', categoriesRouter);

app.use(errorHandlerMiddleware);

export default app;
