import { Router } from 'express';
import { getCategories } from './controller.js';

const categoriesRouter = Router();

categoriesRouter.get('/', getCategories);

export default categoriesRouter;
