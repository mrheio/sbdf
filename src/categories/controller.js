import { eq } from 'drizzle-orm';
import { categories, db, insertCategorySchema } from '../db/index.js';

export const getCategories = (req, res) => {
	return res.json({ response: 'hello world' });
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
			.status(201)
			.header('Location', `/categories/${id}`)
			.json(result);
	} catch (error) {
		return res.json(error);
	}
};
