import { ShowUserController } from "./ShowUserController";
import { ShowUserUseCase } from "./ShowUserUseCase";

const showUserUseCase = new ShowUserUseCase();
const showUserController = new ShowUserController(showUserUseCase);

export { showUserUseCase, showUserController };
