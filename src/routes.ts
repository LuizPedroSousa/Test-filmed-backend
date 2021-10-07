import { Router } from "express";
import userExists from "./middlewares/userExists";
import { authenticateUserController } from "./useCases/AuthenticateUser";
import { createUserController } from "./useCases/CreateUser";
import { deleteUserController } from "./useCases/DeleteUser";
import { findUserController } from "./useCases/FindUser";
import { showUserController } from "./useCases/ShowUser";
import { updateUserController } from "./useCases/UpdateUser";

const router = Router();

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

router.get("/users/find/:user_id", userExists, (req: any, res) =>
  findUserController.handle(req, res)
);

export { router };
