import { Router } from 'express';
import { getCategories, insertCategory } from './controller.js';

const categoriesRouter = Router();

categoriesRouter.get('/', getCategories);
categoriesRouter.post('/', insertCategory);

export default categoriesRouter;
