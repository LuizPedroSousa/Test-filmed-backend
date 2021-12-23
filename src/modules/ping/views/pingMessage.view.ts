import { injectable } from "tsyringe";
import { PingResponseDTO } from "../dtos/pingDTO";

@injectable()
export class PingMessageView {
  render(): PingResponseDTO {
    return {
      message: "Pong 🎉",
    };
  }
}
