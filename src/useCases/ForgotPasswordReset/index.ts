import mongodbUsersRepository from "../../repositories/implementations/MongodbUsersRepository";
import { ForgotPasswordResetController } from "./ForgotPasswordResetController";
import { ForgotPasswordResetUseCase } from "./ForgotPasswordResetUseCase";
import { ForgotPasswordResetValidate } from "./ForgotPasswordResetValidate";

const forgotPasswordResetValidate = new ForgotPasswordResetValidate();
const forgotPasswordResetUseCase = new ForgotPasswordResetUseCase(
  mongodbUsersRepository
);

const forgotPasswordResetController = new ForgotPasswordResetController(
  forgotPasswordResetUseCase,
  forgotPasswordResetValidate
);

export { forgotPasswordResetUseCase, forgotPasswordResetController };
