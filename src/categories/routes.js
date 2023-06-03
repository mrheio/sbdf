import { Router } from 'express';
import { insertCategorySchema } from '../db/index.js';
import validationHandlerMiddleware from '../middleware/validationHandler.js';
import {
	deleteCategories,
	deleteCategory,
	getCategories,
	insertCategory,
	updateCategory,
} from './controller.js';

const categoriesRouter = Router();

categoriesRouter.get('/', getCategories);
categoriesRouter.post(
	'/',
	validationHandlerMiddleware.body(insertCategorySchema),
	insertCategory
);
categoriesRouter.patch(
	'/:id',
	validationHandlerMiddleware.body(insertCategorySchema),
	updateCategory
);
categoriesRouter.delete('/', deleteCategories);
categoriesRouter.delete('/:id', deleteCategory);

export default categoriesRouter;
