import jwt from "jsonwebtoken";
import { injectable } from "tsyringe";
import { ITokenProvider } from "../models/ITokenProvider";

@injectable()
export class JwtTokenProvider implements ITokenProvider {
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
