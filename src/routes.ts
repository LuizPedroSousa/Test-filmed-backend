import { Router } from "express";
import userExists from "./middlewares/userExists";
import { authenticateUserController } from "./useCases/AuthenticateUser";
import { createUserController } from "./useCases/CreateUser";
import { updateUserController } from "./useCases/UpdateUser";

const router = Router();

router.post("/users/create", (req, res) => {
  return createUserController.handle(req, res);
});

router.post("/users/auth", (req, res) => {
  return authenticateUserController.handle(req, res);
});

router.put("/users/update", userExists, (req: any, res) => {
  return updateUserController.handle(req, res);
});

export { router };
