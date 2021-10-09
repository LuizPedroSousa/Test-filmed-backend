import { Request, Response, NextFunction } from "express";
import { TokenExpiredError, JsonWebTokenError } from "jsonwebtoken";
import { ValidationError } from "yup";
import { HttpException } from "../exceptions/HttpException";
import logger from "../utils/logger";

interface ValidationErrors {
  [key: string]: string[];
}

const checkErrors = (
  error: HttpException,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // check if is a yup error
  if (error instanceof ValidationError) {
    const errors: ValidationErrors = {};

    error.inner.forEach((err) => (errors[err.path as any] = err.errors));

    return res.status(400).json({
      message: "Invalid data",
      errors,
    });
  }

  // check if as a token error
  if (
    error instanceof TokenExpiredError ||
    error instanceof JsonWebTokenError
  ) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  // catch instances of HttpException()
  if (error instanceof HttpException) {
    const errorResponse: any = {
      message: error?.message,
    };

    if (error.fields) {
      errorResponse.fields = error.fields;
    }

    const statusCode = error.status || 400;

    return res.status(statusCode).json(errorResponse);
  }

  logger.error("Falha interna", error);
  return res.status(500).json({ message: "Internal server error" });
};

export { checkErrors };
