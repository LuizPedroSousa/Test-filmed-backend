import bcrypt from "bcrypt";
import { injectable } from "tsyringe";
import { IHashProvider } from "../models/IHashProvider";

@injectable()
export class BcryptHashProvider implements IHashProvider {
  async generateSaltByPassword(password: string): Promise<string> {
    const result = await bcrypt.hash(password, 8);
    return result;
  }

  async compare(password: string, hashedPassword: string): Promise<boolean> {
    const result = await bcrypt.compare(password, hashedPassword);

    return result;
  }
}
