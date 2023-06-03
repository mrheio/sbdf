const errorHandlerMiddleware = (error, req, res, next) => {
	return res.status(error.statusCode ?? error.status ?? 400).json(error);
};

export default errorHandlerMiddleware;
