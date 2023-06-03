import { HTTP_STATUS_CODES } from '../utils/index.js';
import categoriesService from './service.js';

export const getCategories = async (req, res, next) => {
	const result = await categoriesService.getCategories();

	return res.json(result);
};

export const insertCategory = async (req, res, next) => {
	const { data } = res.locals;

	try {
		const result = await categoriesService.insertCategory(data);

		return res
			.status(HTTP_STATUS_CODES.SUCCESS.CREATED)
			.header('Location', `/categories/${result.id}`)
			.json(result);
	} catch (error) {
		return next(error);
	}
};

export const updateCategory = async (req, res, next) => {
	const { data } = res.locals;
	const { id } = req.params;

	try {
		const result = await categoriesService.updateCategory(id, data);

		return res
			.status(HTTP_STATUS_CODES.SUCCESS.OK)
			.header('Location', `/categories/${result.id}`)
			.json(result);
	} catch (error) {
		return next(error);
	}
};

export const deleteCategories = async (req, res, next) => {
	try {
		const result = await categoriesService.deleteCategories();

		return res.status(HTTP_STATUS_CODES.SUCCESS.OK).json(result);
	} catch (error) {
		return next(error);
	}
};

export const deleteCategory = async (req, res, next) => {
	const { id } = req.params;

	try {
		await categoriesService.deleteCategory(id);

		return res.status(HTTP_STATUS_CODES.SUCCESS.NO_CONTENT).end();
	} catch (error) {
		return next(error);
	}
};
