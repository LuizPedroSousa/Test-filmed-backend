import userExists from "@/shared/infra/http/middlewares/userExists";
import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import { FindUserController } from "../../controllers/findUser.controller";
import { FindUsersController } from "../../controllers/findUsers.controller";

const findRoutes = Router();

const findUsersController = new FindUsersController();
const findUserController = new FindUserController();

/** this route find users with dynamic query:
 * @example
 * header: {
 *  Authorization: "Bearer (token)"
 * },
 **/
findRoutes.get(
  "/",
  userExists,
  celebrate({
    [Segments.QUERY]: {
      id: Joi.string().optional(),
      name: Joi.string().optional(),
      email: Joi.string().optional(),
    },
  }),
  findUsersController.handle
);

/** this route find an user with id in params:
 * @example
 * header: {
 *  "Authorization": "Bearer (token)"
 * },
 */
findRoutes.get(
  "/:user_id",
  userExists,
  celebrate({
    [Segments.PARAMS]: {
      user_id: Joi.string().required(),
    },
  }),

  findUserController.handle
);

export { findRoutes };
