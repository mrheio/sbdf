import { mysqlTable, serial, text, timestamp } from 'drizzle-orm/mysql-core';
import { createInsertSchema } from 'drizzle-zod';

export const categories = mysqlTable('categories', {
	id: serial('id').primaryKey(),
	name: text('name').notNull(),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const insertCategorySchema = createInsertSchema(categories, {
	name: (schema) => schema.name.min(1),
});
