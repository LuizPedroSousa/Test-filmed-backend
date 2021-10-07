import { Request, Response, NextFunction } from "express";
import { CustomError } from "../entities/CustomError";

const checkErrors = (
  error: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errorResponse: any = {
    message: error?.message || "Unexpected error",
  };

  if (error.fields) {
    errorResponse.fields = error.fields;
  }

  return res.status(400).json(errorResponse);
};

export { checkErrors };
