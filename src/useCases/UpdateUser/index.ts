import mongodbUsersRepository from "../../repositories/implementations/MongodbUsersRepository";
import { UpdateUserController } from "./UpdateUserController";
import { UpdateUserUseCase } from "./UpdateUserUseCase";
import { UpdateUserValidate } from "./UpdateUserValidate";

const updateUserUseCase = new UpdateUserUseCase(mongodbUsersRepository);
const updateUserValidate = new UpdateUserValidate(mongodbUsersRepository);
const updateUserController = new UpdateUserController(
  updateUserUseCase,
  updateUserValidate
);

export { updateUserUseCase, updateUserController };
