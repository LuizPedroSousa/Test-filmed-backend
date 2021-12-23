import { Request, Response, NextFunction } from "express";
import { HttpException } from "../../../exceptions/HttpException";
import { ValidationError, isError as isJoiError } from "joi";
import logger from "../../../../utils/logger";
import { assignDefined } from "@/utils/assignDefined";
import { CelebrateError, isCelebrateError } from "celebrate";
import { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";

const checkErrors = (
  error: HttpException | CelebrateError | ValidationError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
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

  if (isJoiError(error)) {
    const result = {
      status: "error",
      message: "Validation error",
      errors: {},
    } as any;

    error.details.forEach((err) => {
      const correctMessage = err.message.split('"')[2].trimStart();
      result.errors[err.path as any] = correctMessage;
    });

    return res.status(400).json(result);
  }

  if (isCelebrateError(error)) {
    const result = {
      status: "error",
      message: error.message,
      errors: {},
    } as any;

    error.details.forEach((err) => {
      err.details.forEach((detailError: any) => {
        const correctMessage = detailError.message.split('"')[2].trimStart();
        result.errors[detailError.path] = correctMessage;
      });
    });

    return res.status(400).json(result);
  }

  logger.error(error);
  return res
    .status(500)
    .json({ status: "error", message: "Internal server error" });
};

export { checkErrors };
