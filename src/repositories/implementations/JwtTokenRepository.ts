import { TokenRepository } from "../TokenRepository";
import jwt from "jsonwebtoken";

export class JwtTokenRepository implements TokenRepository {
  async sign(payload: any, expiresIn: string): Promise<string> {
    const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET as string, {
      expiresIn,
    });

    return token;
  }
}
