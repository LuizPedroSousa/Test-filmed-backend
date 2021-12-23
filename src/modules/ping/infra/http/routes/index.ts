import { Router } from "express";
import { pingRoutes } from "./container/ping.routes";

const pingRouter = Router();

pingRouter.use("/", pingRoutes);

export { pingRouter };
