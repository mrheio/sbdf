import { ApiError } from '../utils/index.js';

const errorHandlerMiddleware = (error, req, res, next) => {
	if (error instanceof ApiError) {
		return error.send(res);
	}

	throw error;
};

export default errorHandlerMiddleware;
