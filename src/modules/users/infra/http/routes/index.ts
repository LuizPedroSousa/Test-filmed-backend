import { Router } from "express";
import { forgotRoutes } from "./container/forgot.routes";
import { findRoutes } from "./container/find.routes";
import { userRoutes } from "./container/user.routes";

const userRouter = Router();

userRouter.use("/", userRoutes);
userRouter.use("/forgot", forgotRoutes);
userRouter.use("/find", findRoutes);

export { userRouter };
