import { Router } from "express";
import userExists from "../middlewares/userExists";
import { authenticateUserController } from "../useCases/AuthenticateUser";
import { createUserController } from "../useCases/CreateUser";
import { deleteUserController } from "../useCases/DeleteUser";
import { findUserController } from "../useCases/FindUser";
import { findUsersController } from "../useCases/FindUsers";
import { forgotPasswordResetController } from "../useCases/ForgotPasswordReset";
import { forgotPasswordSendMailController } from "../useCases/ForgotPasswordSendMail";
import { pingController } from "../useCases/Ping";
import { showUserController } from "../useCases/ShowUser";
import { updateUserController } from "../useCases/UpdateUser";
import { PingRouter } from "./PingRoute";
import { UsersRoute } from "./UsersRoute";

const router = Router();

const routes = [new PingRouter(router), new UsersRoute(router)];

export { routes };
