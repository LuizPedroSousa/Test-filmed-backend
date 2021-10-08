import { MailTrapMailProvider } from "../../providers/MailTrapMailProvider";
import jwtTokenRepository from "../../repositories/implementations/JwtTokenRepository";
import mongodbUsersRepository from "../../repositories/implementations/MongodbUsersRepository";
import { ForgotPasswordSendMailController } from "./ForgotPasswordSendMailController";
import { ForgotPasswordSendMailUseCase } from "./ForgotPasswordSendMailUseCase";
import { ForgotPasswordSendMailValidate } from "./ForgotPasswordSendMailValidate";
import { ForgotPasswordSendMailView } from "./ForgotPasswordSendMailView";

// repositories and providers
const mailTrapMailProvider = new MailTrapMailProvider();

const forgotPasswordSendMailValidate = new ForgotPasswordSendMailValidate(
  mongodbUsersRepository
);
const forgotPasswordSendMailUseCase = new ForgotPasswordSendMailUseCase(
  mailTrapMailProvider,
  jwtTokenRepository
);

const forgotPasswordSendMailView = new ForgotPasswordSendMailView();

const forgotPasswordSendMailController = new ForgotPasswordSendMailController(
  forgotPasswordSendMailUseCase,
  forgotPasswordSendMailValidate,
  forgotPasswordSendMailView
);

export { forgotPasswordSendMailValidate, forgotPasswordSendMailController };
