import ApiResponse from './ApiResponse.js';
import { HTTP_STATUS_CODES } from './basics.js';

export default class ApiError extends ApiResponse {
	constructor() {
		super({
			type: 'error',
			statusCode: HTTP_STATUS_CODES.ERROR.CLIENT.BAD_REQUEST,
			header: null,
			message: '',
			payload: null,
		});
	}

	badRequest() {
		return super.statusCode(HTTP_STATUS_CODES.ERROR.CLIENT.BAD_REQUEST);
	}

	unauthorized() {
		return super.statusCode(HTTP_STATUS_CODES.ERROR.CLIENT.UNAUTHORIZED);
	}

	forbidden() {
		return super.statusCode(HTTP_STATUS_CODES.ERROR.CLIENT.FORBIDDEN);
	}

	notFound() {
		return super.statusCode(HTTP_STATUS_CODES.ERROR.CLIENT.NOT_FOUND);
	}

	notAllowed() {
		return super.statusCode(HTTP_STATUS_CODES.ERROR.CLIENT.NOT_ALLOWED);
	}

	notAcceptable() {
		return super.statusCode(HTTP_STATUS_CODES.ERROR.CLIENT.NOT_ACCEPTABLE);
	}

	conflict() {
		return super.statusCode(HTTP_STATUS_CODES.ERROR.CLIENT.CONFLICT);
	}
}
