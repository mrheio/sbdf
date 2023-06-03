const validateData = (schema, data) => {
	return schema.parse(data);
};

const validateQueryMiddleware = (schema) => (req, res, next) => {
	try {
		const data = validateData(schema, req.query);

		res.locals.query = data;

		return next();
	} catch (error) {
		next(error);
	}
};

const validateBodyMiddleware = (schema) => (req, res, next) => {
	try {
		const data = validateData(schema, req.body);

		res.locals.data = data;

		return next();
	} catch (error) {
		next(error);
	}
};

const validationHandlerMiddleware = {
	body: validateBodyMiddleware,
	query: validateQueryMiddleware,
};

export default validationHandlerMiddleware;
