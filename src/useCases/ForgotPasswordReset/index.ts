import bcryptHashRepository from "../../repositories/implementations/BcryptHashRepository";
import mongodbUsersRepository from "../../repositories/implementations/MongodbUsersRepository";
import { ForgotPasswordResetController } from "./ForgotPasswordResetController";
import { ForgotPasswordResetUseCase } from "./ForgotPasswordResetUseCase";
import { ForgotPasswordResetValidate } from "./ForgotPasswordResetValidate";
import { ForgotPasswordResetView } from "./ForgotPasswordResetView";

const forgotPasswordResetValidate = new ForgotPasswordResetValidate();
const forgotPasswordResetUseCase = new ForgotPasswordResetUseCase(
  mongodbUsersRepository,
  bcryptHashRepository
);
const forgotPasswordResetView = new ForgotPasswordResetView();

const forgotPasswordResetController = new ForgotPasswordResetController(
  forgotPasswordResetUseCase,
  forgotPasswordResetValidate,
  forgotPasswordResetView
);

export { forgotPasswordResetUseCase, forgotPasswordResetController };
