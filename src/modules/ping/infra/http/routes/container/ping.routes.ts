import { Router } from "express";
import { PingController } from "../../controllers/ping.controller";

const pingController = new PingController();

const pingRoutes = Router();

/**
 * this route returns a Pong to check if api is running
 */
pingRoutes.use("/", pingController.handle);

export { pingRoutes };
