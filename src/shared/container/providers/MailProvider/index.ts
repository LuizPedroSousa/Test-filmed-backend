import { container } from "tsyringe";
import { mailConfig, MailDrivers } from "@/config/mail";
import { IMailProvider } from "./models/IMailProvider";
import { MailTrapProvider } from "./implementations/MailTrapMailProvider";
import { SESMailProvider } from "./implementations/SESMailProvider";

const providers: {
  // eslint-disable-next-line no-unused-vars
  [key in MailDrivers]: any;
} = {
  mailtrap: MailTrapProvider,
  ses: SESMailProvider,
};

container.registerSingleton<IMailProvider>(
  "MailProvider",
  providers[mailConfig.driver]
);
