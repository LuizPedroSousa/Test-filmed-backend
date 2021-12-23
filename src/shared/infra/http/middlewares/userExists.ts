import { Request, Response, NextFunction } from "express";
import { HttpException } from "../../../exceptions/HttpException";
import { User } from ".prisma/client";
import { container } from "tsyringe";
import { ITokenProvider } from "@/shared/container/providers/TokenProvider/models/ITokenProvider";
import { IUserRepository } from "@modules/users/repositories/IUserRepository";

interface UserRequest extends Request {
  user: User;
}

export default async function userExists(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const tokenProvider = container.resolve<ITokenProvider>("TokenProvider");
  const usersRepository = container.resolve<IUserRepository>("UserRepository");
  const { authorization } = req.headers;

  if (!authorization) {
    throw new HttpException({ message: "Unauthorized", status: 401 });
  }
  const parts = authorization.split(" ");

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    throw new HttpException({ message: "Unauthorized" });
  }

  if (!token) {
    throw new HttpException({ message: "Unauthorized", status: 401 });
  }

  const { _id } = tokenProvider.verify(token);
  if (!_id) {
    throw new HttpException({ message: "Unauthorized", status: 401 });
  }

  const user = await usersRepository.findById(_id);

  if (!user) {
    throw new HttpException({ message: "Unauthorized", status: 401 });
  }

  req.user = user;

  return next();
}
