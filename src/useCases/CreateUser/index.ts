import { MongodbUsersRepository } from "../../repositories/implementations/MongodbUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mongodbUsersRepository = new MongodbUsersRepository();

const createUserUseCase = new CreateUserUseCase(mongodbUsersRepository);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
