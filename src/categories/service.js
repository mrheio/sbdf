import { eq } from 'drizzle-orm';
import { categories, db } from '../db/index.js';
import { apiError } from '../utils/index.js';

const getCategories = () => {
	return db.select().from(categories);
};

const insertCategory = async (data) => {
	const insertId = (await db.insert(categories).values(data)).insertId;

	const insertedCategory = (
		await db
			.select()
			.from(categories)
			.where(eq(categories.id, insertId))
			.limit(1)
	)[0];

	return insertedCategory;
};

const updateCategory = async (id, newData) => {
	const foundResult = (
		await db.select().from(categories).where(eq(categories.id, id))
	).length;

	if (!foundResult) {
		throw apiError.notFound({
			message: `Category with id ${id} not found`,
			payload: { id },
		});
	}

	await db.update(categories).set(newData).where(eq(categories.id, id));

	const updatedCategory = (
		await db.select().from(categories).where(eq(categories.id, id)).limit(1)
	)[0];

	return updatedCategory;
};

const deleteCategory = async (id) => {
	const result = await db.delete(categories).where(eq(categories.id, id));

	if (!result.rowsAffected) {
		throw apiError.notFound({
			message: `Category with id ${id} not found`,
			payload: { id },
		});
	}
};

const deleteCategories = async () => {
	const result = await db.delete(categories);

	return [];
};

const categoriesService = {
	getCategories,
	insertCategory,
	updateCategory,
	deleteCategories,
	deleteCategory,
};

export default categoriesService;
