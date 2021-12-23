import { container } from "tsyringe";
import { BcryptHashProvider } from "./implementations/IBcryptHashProvider";
import { IHashProvider } from "./models/IHashProvider";

container.registerSingleton<IHashProvider>("HashProvider", BcryptHashProvider);
