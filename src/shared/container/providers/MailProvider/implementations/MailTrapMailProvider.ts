import { mailConfig } from "@config/mail";
import nodemailer, { Transporter } from "nodemailer";
import { inject, injectable } from "tsyringe";
import logger from "../../../../../utils/logger";
import { IMailTemplateProvider } from "../../MailTemplateProvider/models/IMailTemplateProvider";
import { ISendMailDTO } from "../dtos/ISendMailDTO";
import { IMailProvider } from "../models/IMailProvider";

@injectable()
class MailTrapProvider implements IMailProvider {
  private client: Transporter;

  constructor(
    @inject("MailTemplateProvider")
    private mailTemplateProvider: IMailTemplateProvider
  ) {
    this.client = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: mailConfig.credentials.mailtrap.user,
        pass: mailConfig.credentials.mailtrap.password,
      },
    });
  }

  async sendMail({ to, subject, templateData }: ISendMailDTO): Promise<void> {
    const { name, email } = mailConfig.defaults.from;
    const message = await this.client.sendMail({
      from: {
        name,
        address: email,
      },
      to: {
        name: to.name,
        address: to.email,
      },
      subject,
      html: await this.mailTemplateProvider.parse(templateData),
    });

    logger.success("Message sent: %s", message.messageId);
  }

  async verifyConnection() {
    let isConnectable = false;

    try {
      await this.client.verify();
      isConnectable = true;
    } catch (error) {
      logger.error("Falha na conexão com mailer", error);
    }

    return isConnectable;
  }
}

export { MailTrapProvider };
