import bcryptHashRepository from "../../repositories/implementations/BcryptHashRepository";
import jwtTokenRepository from "../../repositories/implementations/JwtTokenRepository";
import mongodbUsersRepository from "../../repositories/implementations/MongodbUsersRepository";
import { AuthenticateUserController } from "./AuthenticateUserController";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";
import { AuthenticateUserValidate } from "./AuthenticateUserValidate";

const authenticateUserValidate = new AuthenticateUserValidate();

const authenticateUserUseCase = new AuthenticateUserUseCase(
  mongodbUsersRepository,
  jwtTokenRepository,
  bcryptHashRepository
);

const authenticateUserController = new AuthenticateUserController(
  authenticateUserUseCase,
  authenticateUserValidate
);

export { authenticateUserController };
