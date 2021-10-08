import bcryptHashRepository from "../../repositories/implementations/BcryptHashRepository";
import jwtTokenRepository from "../../repositories/implementations/JwtTokenRepository";
import mongodbUsersRepository from "../../repositories/implementations/MongodbUsersRepository";
import { AuthenticateUserController } from "./AuthenticateUserController";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";
import { AuthenticateUserValidate } from "./AuthenticateUserValidate";
import { AuthenticateUserView } from "./AuthenticateUserView";

const authenticateUserValidate = new AuthenticateUserValidate();

const authenticateUserUseCase = new AuthenticateUserUseCase(
  mongodbUsersRepository,
  jwtTokenRepository,
  bcryptHashRepository
);

const authenticateUserView = new AuthenticateUserView();

const authenticateUserController = new AuthenticateUserController(
  authenticateUserUseCase,
  authenticateUserValidate,
  authenticateUserView
);

export { authenticateUserController };
