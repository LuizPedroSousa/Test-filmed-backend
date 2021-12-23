import { noteRouter } from "@modules/notes/infra/http/routes";
import { pingRouter } from "@modules/ping/infra/http/routes";
import { userRouter } from "@modules/users/infra/http/routes";
import { Router } from "express";

const routes = Router();

routes.use("/users", userRouter);
routes.use("/ping", pingRouter);
routes.use("/notes", noteRouter);

export { routes };
