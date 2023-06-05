import { categories, db } from '../src/db/index.js';

const category1 = {
	id: 1,
	name: 'category 1',
};

const category2 = {
	id: 2,
	name: 'category 2',
};

const category3 = {
	id: 3,
	name: 'category 3',
};

export const categoriesData = [category1, category2, category3];

export const setupCategories = async () => {
	await db.insert(categories).values(categoriesData);
};

export const teardownCategories = async () => {
	await db.delete(categories);
};
