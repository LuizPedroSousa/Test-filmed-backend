import { User } from ".prisma/client";
import { MailProvider } from "../../providers/MailProvider";
import { TokenRepository } from "../../repositories/TokenRepository";

export class ForgotPasswordSendMailUseCase {
  constructor(
    private mailProvider: MailProvider,
    private tokenRepository: TokenRepository
  ) {}

  async execute(data: User) {
    const token = this.tokenRepository.sign({ _id: data.id }, "14m");

    const connectionMatch = await this.mailProvider.verifyConnection();

    if (!connectionMatch) {
      throw new Error("Invalid mail provider connection");
    }

    // pass a direct token because this app does not have a front endpoint to redeem password
    await this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email,
      },
      from: {
        name: "Equipe Filmed",
        email: "equipe@filmed.com",
      },
      subject: "Nova senha",
      body: `
          <h2>Olá ${data.name}, parece que você esqueceu sua senha.</h2>
          <p>anda esquecido ultimamente? sem problemas, utilize este token para atualizar sua senha:</p>
          <p>${token}</p>
          `,
    });
  }
}
