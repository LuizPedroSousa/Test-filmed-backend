import { PingController } from "./PingController";
import { PingView } from "./PingView";

const pingView = new PingView();
const pingController = new PingController(pingView);

export { pingController };
