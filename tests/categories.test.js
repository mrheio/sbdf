import {
	afterEach,
	beforeAll,
	beforeEach,
	describe,
	expect,
	test,
} from 'vitest';
import app from '../app.js';
import { HTTP_STATUS_CODES } from '../src/utils/index.js';
import { setupCategories, teardownCategories } from './setup.js';

const API_HOST = process.env.VITE_API_HOST ?? 'localhost';
const PORT = process.env.VITE_PORT ?? 3001;
const BASE_URL = `http://${API_HOST}:${PORT}`;

beforeAll(() => {
	app.listen(PORT, () =>
		console.log(`-> Server running on port ${PORT}, HOST - ${BASE_URL}`)
	);
});

beforeEach(async () => {
	await setupCategories();
});

afterEach(async () => {
	await teardownCategories();
});

describe('/categories', () => {
	test('GET /', async () => {
		const res = await fetch(`${BASE_URL}/categories/`);
		const data = await res.json();

		expect(data).toEqual({
			type: 'success',
			statusCode: HTTP_STATUS_CODES.SUCCESS.OK,
			message: '',
			payload: expect.arrayContaining([
				expect.objectContaining({
					id: expect.any(Number),
					name: expect.any(String),
					createdAt: expect.any(String),
					updatedAt: expect.any(String),
				}),
			]),
		});
	});

	test('GET /:id', async () => {});

	test('POST /', async () => {});

	test('PATCH /:id', async () => {});

	test('DELETE /', async () => {});

	test('DELETE /:id', async () => {});
});
