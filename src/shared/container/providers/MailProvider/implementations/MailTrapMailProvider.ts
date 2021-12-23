import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { injectable } from "tsyringe";
import smtpTransportConfig from "../../../../../config/smtpTransportConfig";
import logger from "../../../../../utils/logger";
import { IMailProvider, Message } from "../models/IMailProvider";

@injectable()
export class MailTrapMailProvider implements IMailProvider {
  private transporter: Mail;
  constructor() {
    this.transporter = nodemailer.createTransport(smtpTransportConfig);
  }

  async sendMail(message: Message): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email,
      },
      from: {
        name: message.from.name,
        address: message.from.email,
      },
      subject: message.subject,
      html: message.body,
    });
  }

  async verifyConnection() {
    let isConnectable = false;

    try {
      await this.transporter.verify();
      isConnectable = true;
    } catch (error) {
      logger.error("Falha na conexão com mailer", error);
    }

    return isConnectable;
  }
}
