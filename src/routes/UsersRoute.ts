import { Router } from "express";
import { Routes } from "../interfaces/Routes";
import userExists from "../middlewares/userExists";
import { authenticateUserController } from "../useCases/AuthenticateUser";
import { createUserController } from "../useCases/CreateUser";
import { deleteUserController } from "../useCases/DeleteUser";
import { findUserController } from "../useCases/FindUser";
import { findUsersController } from "../useCases/FindUsers";
import { forgotPasswordResetController } from "../useCases/ForgotPasswordReset";
import { ForgotPasswordResetController } from "../useCases/ForgotPasswordReset/ForgotPasswordResetController";
import { ForgotPasswordResetValidate } from "../useCases/ForgotPasswordReset/ForgotPasswordResetValidate";
import {
  forgotPasswordSendMailController,
  forgotPasswordSendMailValidate,
} from "../useCases/ForgotPasswordSendMail";
import { showUserController } from "../useCases/ShowUser";
import { updateUserController } from "../useCases/UpdateUser";

export class UsersRoute implements Routes {
  public path: string;
  public router: Router;

  constructor(router: Router) {
    this.path = "/users";
    this.router = router;
    this.initializeRoutes();
  }

  private initializeRoutes() {
    /** this route creates an user:
     * @example 
     * body-content: {
     *  "user_id": string
     *  "name": string
     *  "email": string
     *  "password": string
     * }
     */
    this.router.post(`${this.path}/create`, (req, res) =>
      createUserController.handle(req, res)
    );

    /** this route authenticate an user:
     * @example 
     * body-content: {
     *  "email": string
     *  "password": string
     * }
     */
    this.router.post(`${this.path}/auth`, (req, res) =>
      authenticateUserController.handle(req, res)
    );

    /** this route update an authenticated user:
     * header: {
     *  "Authorization": "Bearer (token)"
     * },
     * @example 
     * body-content: {
     *  "name": string(optional)
     *  "email": string(optional)
     * }
     */
    this.router.put(`${this.path}/update`, userExists, (req: any, res) =>
      updateUserController.handle(req, res)
    );

    /** this route delete an user with id in params and requires authenticate:
     * @example 
     * header: {
     *  "Authorization": "Bearer (token)"
     * },
     */
    this.router.delete(
      `${this.path}/delete/:user_id`,
      userExists,
      (req: any, res) => deleteUserController.handle(req, res)
    );

    /** this route show data of an authenticated user:
     * @example 
     * header: {
     *  Authorization: "Bearer (token)"
     * },
     */
    this.router.get(`${this.path}/show`, userExists, (req: any, res) =>
      showUserController.handle(req, res)
    );

    /** this route find users with dynamic query:
     * @example 
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
    this.router.get(`${this.path}/find`, userExists, (req: any, res) =>
      findUsersController.handle(req, res)
    );

    /** this route find an user with id in params:
     * @example 
     * header: {
     *  "Authorization": "Bearer (token)"
     * },
     */
    this.router.get(`${this.path}/:user_id`, userExists, (req: any, res) =>
      findUserController.handle(req, res)
    );

    /** this route check if user exists, and sends one token into user email:
     * @example 
     * body-content: {
     *  "email": string
     * }
     */
    this.router.post(`${this.path}/forgot/password/validate`, (req, res) =>
      forgotPasswordSendMailController.handle(req, res)
    );

    /** this validate token in header, and change user password:
     * @example
     * header: {
     *  "Authorization": "Bearer (token)"
     * },
     * body-content: {
     *  "password": string
     * }
     */
    this.router.patch(
      `${this.path}/forgot/password/reset`,
      userExists,
      (req: any, res) => forgotPasswordResetController.handle(req, res)
    );
  }
}
