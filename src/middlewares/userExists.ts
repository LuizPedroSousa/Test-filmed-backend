import { Request, Response, NextFunction } from "express";
import { CustomError } from "../entities/CustomError";
import { MongodbUsersRepository } from "../repositories/implementations/MongodbUsersRepository";
import { UserRepository } from "../repositories/UserRepository";
import jwt from "jsonwebtoken";
import { User } from "../entities/User";

interface UserRequest extends Request {
  user: User;
}

class UserExists {
  constructor(private usersRepository: UserRepository) {}
  async handle(
    req: UserRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { authorization } = req.headers;

    if (!authorization) {
      throw new CustomError({ message: "Unauthorized", status: 401 });
    }
    const parts = authorization.split(" ");

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) {
      throw new CustomError({ message: "Unauthorized" });
    }

    if (!token) {
      throw new CustomError({ message: "Unauthorized", status: 401 });
    }

    const { _id } = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET ?? "") as {
      _id: string;
    };

    if (!_id) {
      throw new CustomError({ message: "Unauthorized", status: 401 });
    }

    const user = await this.usersRepository.findById(_id);

    if (!user) {
      throw new CustomError({ message: "Unauthorized", status: 401 });
    }

    req.user = user;

    return next();
  }
}

const mongodbUsersRepository = new MongodbUsersRepository();

const userExists = new UserExists(mongodbUsersRepository);

export default (req: any, res: Response, next: NextFunction) =>
  userExists.handle(req, res, next);
