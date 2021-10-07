import mongodbUsersRepository from "../../repositories/implementations/MongodbUsersRepository";
import { FindUsersController } from "./FindUsersController";
import { FindUsersUseCase } from "./FindUsersUseCase";

const findUsersUseCase = new FindUsersUseCase(mongodbUsersRepository);

const findUsersController = new FindUsersController(findUsersUseCase);

export { findUsersUseCase, findUsersController };
