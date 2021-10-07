import { HashRepository } from "../HashRepository";
import bcrypt from "bcrypt";

class BcryptHashRepository implements HashRepository {
  async generateSaltByPassword(password: string): Promise<string> {
    const result = await bcrypt.hash(password, 8);
    return result;
  }

  async compare(password: string, hashedPassword: string): Promise<boolean> {
    const result = await bcrypt.compare(password, hashedPassword);

    return result;
  }
}

export default new BcryptHashRepository();
