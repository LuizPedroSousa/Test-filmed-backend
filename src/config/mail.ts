import { config } from "dotenv";
config();

export type MailDrivers = "mailtrap" | "ses";

type SesCredentials = {
  accessKeyId: string;
  secretAccessKey: string;
};

type MailTrapCredentials = {
  user: string;
  password: string;
};

type Credentials = {
  ses: SesCredentials;
  mailtrap: MailTrapCredentials;
};

interface IMailConfig {
  driver: MailDrivers;
  credentials: Credentials;
  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

const mailConfig: IMailConfig = {
  driver: (process.env.MAIL_DRIVER as MailDrivers) || "mailtrap",

  credentials: {
    ses: {
      accessKeyId: String(process.env.AWS_SES_ACCESS_KEY_ID),
      secretAccessKey: String(process.env.AWS_SES_SECRET_KEY),
    },
    mailtrap: {
      user: String(process.env.MAILTRAP_USER),
      password: String(process.env.MAILTRAP_PASSWORD),
    },
  },
  defaults: {
    from: {
      email: "noreply@flimed.com",
      name: "Test-Flimed",
    },
  },
};

export { mailConfig };
