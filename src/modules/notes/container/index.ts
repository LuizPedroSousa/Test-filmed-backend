import { container } from "tsyringe";
import { NoteRepository } from "../infra/prisma/repositories/NoteRepository";
import { INoteRepository } from "../repositories/INoteRepository";

container.registerSingleton<INoteRepository>("NoteRepository", NoteRepository);
