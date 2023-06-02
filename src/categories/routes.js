import { Router } from 'express';
import {
	deleteCategory,
	getCategories,
	insertCategory,
	updateCategory,
} from './controller.js';

const categoriesRouter = Router();

categoriesRouter.get('/', getCategories);
categoriesRouter.post('/', insertCategory);
categoriesRouter.patch('/:id', updateCategory);
categoriesRouter.delete('/:id', deleteCategory);

export default categoriesRouter;
