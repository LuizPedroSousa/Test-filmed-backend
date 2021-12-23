import { inject, injectable } from "tsyringe";
import { PingMessageView } from "../views/pingMessage.view";

@injectable()
export class PingMessageUseCase {
  constructor(
    @inject(PingMessageView)
    private readonly pingMessageView: PingMessageView
  ) {}

  execute() {
    return this.pingMessageView.render();
  }
}
