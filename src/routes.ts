import { Router } from "express";
import userExists from "./middlewares/userExists";
import { authenticateUserController } from "./useCases/AuthenticateUser";
import { createUserController } from "./useCases/CreateUser";

const router = Router();

router.post("/users/create", (req, res) => {
  return createUserController.handle(req, res);
});

router.post("/users/auth", (req, res) => {
  return authenticateUserController.handle(req, res);
});

export { router };
