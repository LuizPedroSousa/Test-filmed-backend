import { Router } from "express";
import { Routes } from "../interfaces/Routes";
import { pingController } from "../useCases/Ping";

export class PingRouter implements Routes {
  public path: string;
  public router: Router;

  constructor(router: Router) {
    this.path = "/";
    this.router = router;
    this.initializeRoutes();
  }

  /**
   * this route returns a Pong to check if api is running
   */
  private initializeRoutes() {
    this.router.get(`${this.path}ping`, (req, res) =>
      pingController.handle(req, res)
    );
  }
}
