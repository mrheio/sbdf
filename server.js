import app from './app.js';

const API_HOST = process.env.API_HOST ?? 'localhost';
const PORT = process.env.PORT ?? 3000;
const BASE_URL = `http://${API_HOST}:${PORT}`;

app.listen(PORT, () => {
	console.log(`-> Server running on port ${PORT}, HOST - ${BASE_URL}`);
});
