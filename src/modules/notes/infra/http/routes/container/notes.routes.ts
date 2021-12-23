import userExists from "@/shared/infra/http/middlewares/userExists";
import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import { CreateNoteController } from "../../controllers/createNote.controller";
import { DeleteNoteController } from "../../controllers/deleteNote.controller";
import { ShowNoteController } from "../../controllers/showNote.controller";
import { UpdateNoteController } from "../../controllers/updateNote.controller";

const createNoteController = new CreateNoteController();
const updateNoteController = new UpdateNoteController();
const deleteNoteController = new DeleteNoteController();
const showNoteController = new ShowNoteController();

const noteRoutes = Router();

noteRoutes.post(
  "/create",
  userExists,
  celebrate({
    [Segments.BODY]: {
      title: Joi.string().required(),
      content: Joi.string().required(),
      description: Joi.string().required(),
    },
  }),
  createNoteController.handle
);

noteRoutes.put(
  "/update/:note_id",
  userExists,
  celebrate({
    [Segments.PARAMS]: {
      note_id: Joi.string().required(),
    },
    [Segments.BODY]: {
      title: Joi.string().optional(),
      content: Joi.string().optional(),
      description: Joi.string().optional(),
    },
  }),
  updateNoteController.handle
);

noteRoutes.get(
  "/show/:note_id",
  userExists,
  celebrate({
    [Segments.PARAMS]: {
      note_id: Joi.string().required(),
    },
  }),
  showNoteController.handle
);

noteRoutes.delete(
  "/delete/:note_id",
  userExists,
  celebrate({
    [Segments.PARAMS]: {
      note_id: Joi.string().required(),
    },
  }),
  deleteNoteController.handle
);

export { noteRoutes };
