import mongodbUsersRepository from "../../repositories/implementations/MongodbUsersRepository";
import { FindUserController } from "./FindUserController";
import { FindUserUseCase } from "./FindUserUseCase";
import { FindUserValidate } from "./FindUserValidate";
import { FindUserView } from "./FindUserView";

const findUserValidate = new FindUserValidate();
const findUserUseCase = new FindUserUseCase(mongodbUsersRepository);
const findUserView = new FindUserView();

const findUserController = new FindUserController(
  findUserUseCase,
  findUserValidate,
  findUserView
);

export { findUserController, findUserUseCase };
