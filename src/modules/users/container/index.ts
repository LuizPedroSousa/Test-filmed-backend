import { container } from "tsyringe";
import { UserRepository } from "../infra/prisma/repositories/UserRepository";
import { IUserRepository } from "../repositories/IUserRepository";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
