import { eq } from 'drizzle-orm';
import { categories, db, insertCategorySchema } from '../db/index.js';
import { HTTP_STATUS_CODES } from '../utils/index.js';

export const getCategories = async (req, res) => {
	const result = await db.select().from(categories);

	return res.status(HTTP_STATUS_CODES.SUCCESS.OK).json(result);
};

export const insertCategory = async (req, res) => {
	const { body: data } = req;

	try {
		const category = insertCategorySchema.parse(data);

		const id = (await db.insert(categories).values(category)).insertId;

		const result = await db
			.select()
			.from(categories)
			.where(eq(categories.id, id));

		return res
			.status(HTTP_STATUS_CODES.SUCCESS.CREATED)
			.header('Location', `/categories/${id}`)
			.json(result);
	} catch (error) {
		return res.status(error.status ?? 400).json(error);
	}
};

export const updateCategory = async (req, res) => {
	const { body } = req;
	const { id } = req.params;

	try {
		const newData = insertCategorySchema.parse(body);

		await db.update(categories).set(newData).where(eq(categories.id, id));

		const result = await db
			.select()
			.from(categories)
			.where(eq(categories.id, id));

		return res
			.status(HTTP_STATUS_CODES.SUCCESS.OK)
			.header('Location', `/categories/${id}`)
			.json(result);
	} catch (error) {
		return res.json(error);
	}
};

export const deleteCategory = async (req, res) => {
	const { id } = req.params;

	try {
		const result = await db.delete(categories).where(eq(categories.id, id));

		if (!result.rowsAffected) {
			return res
				.status(HTTP_STATUS_CODES.ERROR.CLIENT.NOT_FOUND)
				.json({ message: `Category with id ${id} not found` });
		}

		return res.status(HTTP_STATUS_CODES.SUCCESS.NO_CONTENT).end();
	} catch (error) {
		return res.json(error);
	}
};
