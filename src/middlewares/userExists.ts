import { Request, Response, NextFunction } from "express";
import { HttpException } from "../exceptions/HttpException";
import mongodbUsersRepository from "../repositories/implementations/MongodbUsersRepository";
import { UserRepository } from "../repositories/UserRepository";
import { User } from ".prisma/client";
import { TokenRepository } from "../repositories/TokenRepository";
import jwtTokenRepository from "../repositories/implementations/JwtTokenRepository";

interface UserRequest extends Request {
  user: User;
}

class UserExists {
  constructor(
    private usersRepository: UserRepository,
    private tokenRepository: TokenRepository
  ) {}
  async handle(
    req: UserRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> {
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

    const { _id } = this.tokenRepository.verify(token);
    if (!_id) {
      throw new HttpException({ message: "Unauthorized", status: 401 });
    }

    const user = await this.usersRepository.findById(_id);

    if (!user) {
      throw new HttpException({ message: "Unauthorized", status: 401 });
    }

    req.user = user;

    return next();
  }
}

const userExists = new UserExists(mongodbUsersRepository, jwtTokenRepository);

export default (req: any, res: Response, next: NextFunction) =>
  userExists.handle(req, res, next);
