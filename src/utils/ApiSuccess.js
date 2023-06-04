import ApiResponse from './ApiResponse.js';
import { HTTP_STATUS_CODES } from './basics.js';

export default class ApiSuccess extends ApiResponse {
	constructor() {
		super({
			type: 'success',
			statusCode: HTTP_STATUS_CODES.SUCCESS.OK,
			header: null,
			message: '',
			payload: null,
		});
	}

	ok(header) {
		return super
			.statusCode(HTTP_STATUS_CODES.SUCCESS.OK)
			.header(header ?? null);
	}

	created(Location) {
		return super
			.statusCode(HTTP_STATUS_CODES.SUCCESS.CREATED)
			.header({ Location });
	}

	noContent() {
		return super
			.statusCode(HTTP_STATUS_CODES.SUCCESS.NO_CONTENT)
			.header(null);
	}
}
