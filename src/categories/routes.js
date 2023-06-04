import { Router } from 'express';
import { insertCategorySchema } from '../db/index.js';
import validationHandlerMiddleware from '../middleware/validationHandler.js';
import categoriesController from './controller.js';

const categoriesRouter = Router();

categoriesRouter.get('/', categoriesController.getCategories);
categoriesRouter.get('/:id', categoriesController.getCategory);

categoriesRouter.post(
	'/',
	validationHandlerMiddleware.body(insertCategorySchema),
	categoriesController.insertCategory
);

categoriesRouter.patch(
	'/:id',
	validationHandlerMiddleware.body(insertCategorySchema),
	categoriesController.updateCategory
);

categoriesRouter.delete('/', categoriesController.deleteCategories);
categoriesRouter.delete('/:id', categoriesController.deleteCategory);

export default categoriesRouter;
