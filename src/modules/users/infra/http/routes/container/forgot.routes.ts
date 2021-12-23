import userExists from "@/shared/infra/http/middlewares/userExists";
import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import { ForgotPasswordResetController } from "../../controllers/forgotPasswordReset.controller";
import { ForgotPasswordSendMailController } from "../../controllers/forgotPasswordSendMail.controller";

const forgotRoutes = Router();

const forgotPasswordSendMailController = new ForgotPasswordSendMailController();

const forgotPasswordResetController = new ForgotPasswordResetController();

/** this route check if user exists, and sends one token into user email **/
forgotRoutes.post(
  "/password/validate",
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().required(),
    },
  }),
  forgotPasswordSendMailController.handle
);

/** this validate token in header, and change user password
 * @example
 * header: {
 *  "Authorization": "Bearer (token)"
 * },
 **/
forgotRoutes.patch(
  "/password/reset",
  userExists,
  celebrate({
    [Segments.BODY]: {
      password: Joi.string().required(),
    },
  }),
  forgotPasswordResetController.handle
);

export { forgotRoutes };
