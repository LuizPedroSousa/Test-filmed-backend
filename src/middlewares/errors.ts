import { Request, Response, NextFunction } from "express";
import { TokenExpiredError } from "jsonwebtoken";
import { ValidationError } from "yup";
import { CustomError } from "../entities/CustomError";

interface ValidationErrors {
  [key: string]: string[];
}

const checkErrors = (
  error: CustomError,
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

  // check if token as expired
  if (error instanceof TokenExpiredError) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  // catch instances of new CustomError("")
  if (error instanceof CustomError) {
    const errorResponse: any = {
      message: error?.message,
    };

    if (error.fields) {
      errorResponse.fields = error.fields;
    }

    const statusCode = error.status || 400;

    return res.status(statusCode).json(errorResponse);
  }

  console.log(error);
  return res.status(500).json({ message: "Internal server error" });
};

export { checkErrors };
