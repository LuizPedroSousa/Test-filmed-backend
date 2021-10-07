import { Request, Response, NextFunction } from "express";
import { CustomError } from "../entities/CustomError";

const checkErrors = (
  error: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
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
