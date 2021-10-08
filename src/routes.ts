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

/** this route returns a Pong to check if api is running*/
router.get("/ping", (req, res) => {
  pingController.handle(req, res);
});

/** this route creates an user:
 * body-content: {
 *  "user_id": string
 *  "name": string
 *  "email": string
 *  "password": string
 * }
 */
router.post("/users/create", (req, res) =>
  createUserController.handle(req, res)
);

/** this route authenticate an user:
 * body-content: {
 *  "email": string
 *  "password": string
 * }
 */
router.post("/users/auth", (req, res) =>
  authenticateUserController.handle(req, res)
);

/** this route update an authenticated user:
 * header: {
 *  "Authorization": "Bearer (token)"
 * },
 * body-content: {
 *  "name": string(optional)
 *  "email": string(optional)
 * }
 */
router.put("/users/update", userExists, (req: any, res) =>
  updateUserController.handle(req, res)
);

/** this route delete an user with id in params and requires authenticate:
 * header: {
 *  "Authorization": "Bearer (token)"
 * },
 */
router.delete("/users/delete/:user_id", userExists, (req, res) =>
  deleteUserController.handle(req, res)
);

/** this route show data of an authenticated user:
 * header: {
 *  Authorization: "Bearer (token)"
 * },
 */
router.get("/users/show", userExists, (req: any, res) =>
  showUserController.handle(req, res)
);

/** this route find users with dynamic query:
 * header: {
 *  Authorization: "Bearer (token)"
 * },
 *
 * optional-queries: {
 *  id,
 *  name,
 *  email,
 * }
 */
router.get("/users/find", userExists, (req, res) =>
  findUsersController.handle(req, res)
);

/** this route find an user with id in params:
 * header: {
 *  "Authorization": "Bearer (token)"
 * },
 */
router.get("/users/:user_id", userExists, (req: any, res) =>
  findUserController.handle(req, res)
);

/** this route check if user exists, and sends one token into user email:
 * body-content: {
 *  "email": string
 * }
 */
router.post("/users/forgot/password/validate", (req: any, res) =>
  forgotPasswordSendMailController.handle(req, res)
);

/** this validate token in header, and change user password:
 * header: {
 *  "Authorization": "Bearer (token)"
 * },
 * body-content: {
 *  "password": string
 * }
 */
router.patch("/users/forgot/password/reset", userExists, (req: any, res) =>
  forgotPasswordResetController.handle(req, res)
);

export { router };
