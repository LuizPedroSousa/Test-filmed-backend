import { container } from "tsyringe";
import { MailTrapMailProvider } from "./implementations/MailTrapMailProvider";
import { IMailProvider } from "./models/IMailProvider";

container.registerSingleton<IMailProvider>(
  "MailProvider",
  MailTrapMailProvider
);
