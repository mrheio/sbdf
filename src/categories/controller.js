import { ApiSuccess } from '../utils/index.js';
import categoriesService from './service.js';

const getCategories = async (req, res, next) => {
	const result = await categoriesService.getCategories();

	return new ApiSuccess().ok().payload(result).send(res);
};

const getCategory = async (req, res, next) => {
	const { id } = req.params;

	try {
		const result = await categoriesService.getCategory(id);

		return new ApiSuccess().ok().payload(result).send(res);
	} catch (error) {
		return next(error);
	}
};

const insertCategory = async (req, res, next) => {
	const { data } = res.locals;

	try {
		const result = await categoriesService.insertCategory(data);

		return new ApiSuccess()
			.created(`/categories/${result.id}`)
			.payload(result)
			.send(res);
	} catch (error) {
		return next(error);
	}
};

const updateCategory = async (req, res, next) => {
	const { data } = res.locals;
	const { id } = req.params;

	try {
		const result = await categoriesService.updateCategory(id, data);

		return new ApiSuccess()
			.ok({ Location: `/categories/${result.id}` })
			.payload(result)
			.send(res);
	} catch (error) {
		return next(error);
	}
};

const deleteCategories = async (req, res, next) => {
	try {
		const result = await categoriesService.deleteCategories();

		return new ApiSuccess().ok().payload(result).send(res);
	} catch (error) {
		return next(error);
	}
};

const deleteCategory = async (req, res, next) => {
	const { id } = req.params;

	try {
		await categoriesService.deleteCategory(id);

		return new ApiSuccess().noContent().send(res);
	} catch (error) {
		return next(error);
	}
};

const categoriesController = {
	getCategories,
	getCategory,
	insertCategory,
	updateCategory,
	deleteCategories,
	deleteCategory,
};

export default categoriesController;
