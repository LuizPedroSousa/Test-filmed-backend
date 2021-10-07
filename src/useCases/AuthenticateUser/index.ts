import { MongodbUsersRepository } from "../../repositories/implementations/MongodbUsersRepository";
import { AuthenticateUserController } from "./AuthenticateUserController";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";
import { AuthenticateUserValidate } from "./AuthenticateUserValidate";

const mongodbUsersRepository = new MongodbUsersRepository();

const authenticateUserValidate = new AuthenticateUserValidate();

const authenticateUserUseCase = new AuthenticateUserUseCase(
  mongodbUsersRepository
);

const authenticateUserController = new AuthenticateUserController(
  authenticateUserUseCase,
  authenticateUserValidate
);

export { authenticateUserController };
