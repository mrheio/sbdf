const createApiResponseBody = (apiResponse) => {
	return {
		type: apiResponse._type,
		statusCode: apiResponse._statusCode,
		message: apiResponse._message,
		payload: apiResponse._payload,
	};
};

export default class ApiResponse {
	constructor({ type, statusCode, header, message, payload }) {
		this._type = type;
		this._statusCode = statusCode;
		this._header = header;
		this._message = message;
		this._payload = payload;
	}

	type(type) {
		this._type = type;
		return this;
	}

	statusCode(statusCode) {
		this._statusCode = statusCode;
		return this;
	}

	header(header) {
		this._header = header;
		return this;
	}

	message(message) {
		this._message = message;
		return this;
	}

	payload(payload) {
		this._payload = payload;
		return this;
	}

	send(res) {
		res.status(this._statusCode)
			.header(this._header)
			.json(createApiResponseBody(this));
	}
}
