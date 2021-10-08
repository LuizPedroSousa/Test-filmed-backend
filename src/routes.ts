import { Router } from "express";
import userExists from "./middlewares/userExists";
import { authenticateUserController } from "./useCases/AuthenticateUser";
import { createUserController } from "./useCases/CreateUser";
import { deleteUserController } from "./useCases/DeleteUser";
import { findUserController } from "./useCases/FindUser";
import { findUsersController } from "./useCases/FindUsers";
import { forgotPasswordResetController } from "./useCases/ForgotPasswordReset";
import { forgotPasswordSendMailController } from "./useCases/ForgotPasswordSendMail";
import { pingController } from "./useCases/Ping";
import { showUserController } from "./useCases/ShowUser";
import { updateUserController } from "./useCases/UpdateUser";

const router = Router();

router.get("/ping", (req, res) => {
  pingController.handle(req, res);
});

router.post("/users/create", (req, res) =>
  createUserController.handle(req, res)
);

router.post("/users/auth", (req, res) =>
  authenticateUserController.handle(req, res)
);

router.put("/users/update", userExists, (req: any, res) =>
  updateUserController.handle(req, res)
);

router.delete("/users/delete/:user_id", userExists, (req, res) =>
  deleteUserController.handle(req, res)
);

router.get("/users/show", userExists, (req: any, res) =>
  showUserController.handle(req, res)
);

router.get("/users/find", userExists, (req, res) =>
  findUsersController.handle(req, res)
);

router.get("/users/:user_id", userExists, (req: any, res) =>
  findUserController.handle(req, res)
);

router.post("/users/forgot/password/validate", (req: any, res) =>
  forgotPasswordSendMailController.handle(req, res)
);

router.patch("/users/forgot/password/reset", userExists, (req: any, res) =>
  forgotPasswordResetController.handle(req, res)
);

export { router };
