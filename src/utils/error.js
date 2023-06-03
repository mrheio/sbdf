import { HTTP_STATUS_CODES } from './index.js';

const createApiError = ({ statusCode, message, payload }) => {
	return {
		type: 'error',
		statusCode: statusCode ?? HTTP_STATUS_CODES.ERROR.CLIENT.BAD_REQUEST,
		message,
		payload: payload ?? null,
	};
};

const createNotFoundError = ({ message, payload }) => {
	return createApiError({
		statusCode: HTTP_STATUS_CODES.ERROR.CLIENT.NOT_FOUND,
		message,
		payload,
	});
};

const createConflictError = ({ message, payload }) => {
	return createApiError({
		statusCode: HTTP_STATUS_CODES.ERROR.CLIENT.CONFLICT,
		message,
		payload,
	});
};

export const apiError = {
	notFound: createNotFoundError,
	conflict: createConflictError,
};
