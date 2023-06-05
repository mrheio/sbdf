import { connect } from '@planetscale/database';

const DATABASE_HOST = process.env.VITE_DATABASE_HOST;
const DATABASE_USERNAME = process.env.VITE_DATABASE_USERNAME;
const DATABASE_PASSWORD = process.env.VITE_DATABASE_PASSWORD;

const testingConnection = connect({
	host: DATABASE_HOST,
	username: DATABASE_USERNAME,
	password: DATABASE_PASSWORD,
});

export default testingConnection;
