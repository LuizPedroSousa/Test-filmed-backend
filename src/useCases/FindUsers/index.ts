import mongodbUsersRepository from "../../repositories/implementations/MongodbUsersRepository";
import { FindUsersController } from "./FindUsersController";
import { FindUsersUseCase } from "./FindUsersUseCase";
import { FindUsersView } from "./FindUsersView";

const findUsersUseCase = new FindUsersUseCase(mongodbUsersRepository);

const findUsersView = new FindUsersView();
const findUsersController = new FindUsersController(
  findUsersUseCase,
  findUsersView
);

export { findUsersUseCase, findUsersController };
