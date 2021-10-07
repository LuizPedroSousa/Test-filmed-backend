import { MongodbUsersRepository } from "../../repositories/implementations/MongodbUsersRepository";
import { UpdateUserController } from "./UpdateUserController";
import { UpdateUserUseCase } from "./UpdateUserUseCase";
import { UpdateUserValidate } from "./UpdateUserValidate";

const mongodbUsersRepository = new MongodbUsersRepository();

const updateUserUseCase = new UpdateUserUseCase(mongodbUsersRepository);
const updateUserValidate = new UpdateUserValidate();
const updateUserController = new UpdateUserController(
  updateUserUseCase,
  updateUserValidate
);

export { updateUserUseCase, updateUserController };
