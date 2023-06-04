import { eq } from 'drizzle-orm';
import { categories, db } from '../db/index.js';
import { ApiError } from '../utils/index.js';

const getCategories = () => {
	return db.select().from(categories);
};

const getCategory = async (id) => {
	const category = (
		await db.select().from(categories).where(eq(categories.id, id))
	)[0];

	if (!category) {
		throw new ApiError()
			.notFound()
			.message(`Category with id ${id} not found`)
			.payload({ id });
	}

	return category;
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
		throw new ApiError()
			.notFound()
			.message(`Category with id ${id} not found`)
			.payload({ id });
	}

	await db.update(categories).set(newData).where(eq(categories.id, id));

	const updatedCategory = (
		await db.select().from(categories).where(eq(categories.id, id)).limit(1)
	)[0];

	return updatedCategory;
};

const deleteCategories = async () => {
	await db.delete(categories);

	return [];
};

const deleteCategory = async (id) => {
	const result = await db.delete(categories).where(eq(categories.id, id));

	if (!result.rowsAffected) {
		throw new ApiError()
			.notFound()
			.message(`Category with id ${id} not found`)
			.payload({ id });
	}

	await db.delete(categories).where(eq(categories.id, id));
};

const categoriesService = {
	getCategories,
	getCategory,
	insertCategory,
	updateCategory,
	deleteCategories,
	deleteCategory,
};

export default categoriesService;
