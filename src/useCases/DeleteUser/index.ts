import mongodbUsersRepository from "../../repositories/implementations/MongodbUsersRepository";
import { DeleteUserController } from "./DeleteUserController";
import { DeleteUserUseCase } from "./DeleteUserUseCase";
import { DeleteUserValidate } from "./DeleteUserValidate";
import { DeleteUserView } from "./DeleteUserView";

const deleteUserUseCase = new DeleteUserUseCase(mongodbUsersRepository);
const deleteUserValidate = new DeleteUserValidate();
const deleteUserView = new DeleteUserView();

const deleteUserController = new DeleteUserController(
  deleteUserUseCase,
  deleteUserValidate,
  deleteUserView
);

export { deleteUserController, deleteUserUseCase };
