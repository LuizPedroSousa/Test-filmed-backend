import { container } from "tsyringe";
import { JwtTokenProvider } from "./implementations/JWTTokenProvider";
import { ITokenProvider } from "./models/ITokenProvider";

container.registerSingleton<ITokenProvider>("TokenProvider", JwtTokenProvider);
