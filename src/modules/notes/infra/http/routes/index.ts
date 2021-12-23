import { Router } from "express";
import { noteRoutes } from "./container/notes.routes";

const noteRouter = Router();

noteRouter.use("/", noteRoutes);

export { noteRouter };
