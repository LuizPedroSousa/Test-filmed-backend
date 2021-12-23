import userExists from "@/shared/infra/http/middlewares/userExists";
import { ShowUserController } from "@modules/users/infra/http/controllers/showUser.controller";
import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import { AuthenticateUserController } from "../../controllers/authenticateUser.controller";
import { CreateUserController } from "../../controllers/createUser.controller";
import { DeleteUserController } from "../../controllers/deleteUser.controller";
import { UpdateUserController } from "../../controllers/updateUser.controller";

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();
const showUserController = new ShowUserController();

const userRoutes = Router();

/** this route creates an user: **/
userRoutes.post(
  "/create",

  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),

  createUserController.handle
);

/** this route authenticate an user **/
userRoutes.post(
  "/auth",
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().required(),
      password: Joi.string().required(),
    },
  }),

  authenticateUserController.handle
);

/** this route update an authenticated user:
 * header: {
 *  "Authorization": "Bearer (token)"
 * },
 */
userRoutes.put(
  "/update",
  userExists,
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().optional(),
      email: Joi.string().optional(),
    },
  }),

  updateUserController.handle
);

/** this route delete an user with id in params and requires authenticate:
 * @example
 * header: {
 *  "Authorization": "Bearer (token)"
 * },
 */
userRoutes.delete(
  "/delete/:user_id",
  userExists,

  celebrate({
    [Segments.PARAMS]: {
      user_id: Joi.string().required(),
    },
  }),

  deleteUserController.handle
);

/** this route show data of an authenticated user:
 * @example
 * header: {
 *  Authorization: "Bearer (token)"
 * },
 */
userRoutes.get("/show", userExists, showUserController.handle);

export { userRoutes };
