import { TokenRepository } from "../TokenRepository";
import jwt from "jsonwebtoken";

class JwtTokenRepository implements TokenRepository {
  sign(payload: any, expiresIn: string): string {
    const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET as string, {
      expiresIn,
    });

    return token;
  }

  verify(token: string): any {
    const payload = jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET ?? ""
    ) as {
      _id: string;
    };

    return payload;
  }
}

export default new JwtTokenRepository();
