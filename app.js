import express from 'express';
import morgan from 'morgan';
import './config.js';
import categoriesRouter from './src/categories/index.js';
import { errorHandlerMiddleware } from './src/middleware/index.js';

const port = process.env.PORT ?? 3000;

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/categories', categoriesRouter);

app.use(errorHandlerMiddleware);

app.listen(port, () => {
	console.log(`APP listening on port ${port}`);
});
