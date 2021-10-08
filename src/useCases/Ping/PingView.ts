import { PingResponseDTO } from "./PingDTO";

export class PingView {
  render(): PingResponseDTO {
    return {
      message: "Pong 🎉",
    };
  }
}
