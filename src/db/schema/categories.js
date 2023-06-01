import { mysqlTable, serial, text, timestamp } from 'drizzle-orm/mysql-core';

export const categories = mysqlTable('categories', {
	id: serial('id').primaryKey().autoincrement(),
	name: text('name').notNull(),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
