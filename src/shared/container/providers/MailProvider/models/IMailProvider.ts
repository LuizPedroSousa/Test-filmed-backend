import { ISendMailDTO } from "../dtos/ISendMailDTO";

interface Address {
  email: string;
  name: string;
}

export interface IMailProvider {
  sendMail(data: ISendMailDTO): Promise<void>;
  verifyConnection(): Promise<boolean>;
}
