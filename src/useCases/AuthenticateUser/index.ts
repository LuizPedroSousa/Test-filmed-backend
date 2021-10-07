import { JwtTokenRepository } from "../../repositories/implementations/JwtTokenRepository";
import { MongodbUsersRepository } from "../../repositories/implementations/MongodbUsersRepository";
import { AuthenticateUserController } from "./AuthenticateUserController";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";
import { AuthenticateUserValidate } from "./AuthenticateUserValidate";

const mongodbUsersRepository = new MongodbUsersRepository();

const authenticateUserValidate = new AuthenticateUserValidate();

const jwtTokenRepository = new JwtTokenRepository();

const authenticateUserUseCase = new AuthenticateUserUseCase(
  mongodbUsersRepository,
  jwtTokenRepository
);

const authenticateUserController = new AuthenticateUserController(
  authenticateUserUseCase,
  authenticateUserValidate
);

export { authenticateUserController };
