import { ShowUserController } from "./ShowUserController";
import { ShowUserView } from "./ShowUserView";

const showUserView = new ShowUserView();
const showUserController = new ShowUserController(showUserView);

export { showUserController };
