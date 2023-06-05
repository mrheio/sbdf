import { drizzle } from 'drizzle-orm/planetscale-serverless';
import { migrate } from 'drizzle-orm/planetscale-serverless/migrator';
import { devConnection, testingConnection } from './connections/index.js';

const connection =
	process.env.VITEST === 'true' ? testingConnection : devConnection;

export const db = drizzle(connection);

await migrate(db, { migrationsFolder: 'migrations' });
