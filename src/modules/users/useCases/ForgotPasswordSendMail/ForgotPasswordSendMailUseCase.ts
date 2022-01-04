import { User } from ".prisma/client";
import { IMailProvider } from "@/shared/container/providers/MailProvider/models/IMailProvider";
import { ITokenProvider } from "@/shared/container/providers/TokenProvider/models/ITokenProvider";
import { inject, injectable } from "tsyringe";
import path from "path";

@injectable()
export class ForgotPasswordSendMailUseCase {
  constructor(
    @inject("MailProvider")
    private mailProvider: IMailProvider,
    @inject("TokenProvider")
    private tokenProvider: ITokenProvider
  ) {}

  async execute(data: User) {
    const token = this.tokenProvider.sign({ _id: data.id }, "14m");

    const connectionMatch = await this.mailProvider.verifyConnection();

    if (!connectionMatch) {
      throw new Error("Invalid mail provider connection");
    }

    const forgotPasswordTemplate = path.resolve(
      __dirname,
      "..",
      "..",
      "views",
      "forgot_password.hbs"
    );

    // pass a direct token because this app does not have a front endpoint to redeem password
    await this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email,
      },
      subject: "Nova senha",
      templateData: {
        file: forgotPasswordTemplate,
        variables: {
          name: data.name,
          token,
        },
      },
    });
  }
}
