import nodemailer, { Transporter } from "nodemailer";
import aws from "aws-sdk";
import { injectable, inject } from "tsyringe";

import { IMailProvider } from "../models/IMailProvider";
import { IMailTemplateProvider } from "../../MailTemplateProvider/models/IMailTemplateProvider";
import logger from "@/utils/logger";
import { mailConfig } from "@config/mail";
import { ISendMailDTO } from "../dtos/ISendMailDTO";

@injectable()
export class SESMailProvider implements IMailProvider {
  private client: Transporter;

  constructor(
    @inject("MailTemplateProvider")
    private mailTemplateProvider: IMailTemplateProvider
  ) {
    this.client = nodemailer.createTransport({
      SES: new aws.SES({
        apiVersion: "2010-12-01",
        region: "us-east-1",
        credentials: {
          accessKeyId: mailConfig.credentials.ses.accessKeyId,
          secretAccessKey: mailConfig.credentials.ses.secretAccessKey,
        },
      }),
    });
  }

  public async sendMail({
    subject,
    to,
    templateData,
  }: ISendMailDTO): Promise<void> {
    const { name, email } = mailConfig.defaults.from;

    await this.client.sendMail({
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
  }

  async verifyConnection() {
    let isConnectable = true;

    return isConnectable;
  }
}
