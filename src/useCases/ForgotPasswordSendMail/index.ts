import { MailTrapMailProvider } from "../../providers/MailTrapMailProvider";
import { JwtTokenRepository } from "../../repositories/implementations/JwtTokenRepository";
import { MongodbUsersRepository } from "../../repositories/implementations/MongodbUsersRepository";
import { ForgotPasswordSendMailController } from "./ForgotPasswordSendMailController";
import { ForgotPasswordSendMailUseCase } from "./ForgotPasswordSendMailUseCase";
import { ForgotPasswordSendMailValidate } from "./ForgotPasswordSendMailValidate";

// repositories and providers
const mongodbUsersRepository = new MongodbUsersRepository();
const mailTrapMailProvider = new MailTrapMailProvider();
const tokenRepository = new JwtTokenRepository();

const forgotPasswordSendMailValidate = new ForgotPasswordSendMailValidate(
  mongodbUsersRepository
);
const forgotPasswordSendMailUseCase = new ForgotPasswordSendMailUseCase(
  mailTrapMailProvider,
  tokenRepository
);

const forgotPasswordSendMailController = new ForgotPasswordSendMailController(
  forgotPasswordSendMailUseCase,
  forgotPasswordSendMailValidate
);

export { forgotPasswordSendMailValidate, forgotPasswordSendMailController };
