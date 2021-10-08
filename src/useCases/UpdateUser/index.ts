import mongodbUsersRepository from "../../repositories/implementations/MongodbUsersRepository";
import { UpdateUserController } from "./UpdateUserController";
import { UpdateUserUseCase } from "./UpdateUserUseCase";
import { UpdateUserValidate } from "./UpdateUserValidate";
import { UpdateUserView } from "./UpdateUserView";

const updateUserUseCase = new UpdateUserUseCase(mongodbUsersRepository);
const updateUserValidate = new UpdateUserValidate(mongodbUsersRepository);
const updateUserView = new UpdateUserView();

const updateUserController = new UpdateUserController(
  updateUserUseCase,
  updateUserValidate,
  updateUserView
);

export { updateUserUseCase, updateUserController };
