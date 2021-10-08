import mongodbUsersRepository from "../../repositories/implementations/MongodbUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserValidate } from "./CreateUserValidate";
import { CreateUserView } from "./CreateUserView";

const createUserUseCase = new CreateUserUseCase(mongodbUsersRepository);
const createUserValidate = new CreateUserValidate(mongodbUsersRepository);
const createUserView = new CreateUserView();

const createUserController = new CreateUserController(
  createUserUseCase,
  createUserValidate,
  createUserView
);

export { createUserUseCase, createUserController };
