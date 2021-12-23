import { PingMessageUseCase } from "@modules/ping/useCases/pingMessageUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class PingController {
  handle(req: Request, res: Response) {
    const pingMessageUseCase = container.resolve(PingMessageUseCase);

    const response = pingMessageUseCase.execute();

    return res.status(200).json(response);
  }
}
