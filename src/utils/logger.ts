import { Timestamp } from "@skyra/timestamp";
import chalk from "chalk";
import { LoggerActions } from "../shared/interfaces/LoggerActions";

class Logger implements LoggerActions {
  info(text: string, ...args: any) {
    return console.log(
      chalk`{bgGray.white [${new Timestamp(
        "YYYY-MM-DD HH:mm:ss"
      )}]} {gray ${text}}`,
      ...args
    );
  }

  warn(text: string, ...args: any) {
    return console.log(
      chalk`{bgYellow.gray [${new Timestamp(
        "YYYY-MM-DD HH:mm:ss"
      )}]} {yellow ${text}}`,
      ...args
    );
  }

  success(text: string, ...args: any) {
    return console.log(
      chalk`{bgGreen.black [${new Timestamp(
        "YYYY-MM-DD HH:mm:ss"
      )}]} {cyan ${text}}`,
      ...args
    );
  }

  error(text: string, ...args: any) {
    return console.log(
      chalk`{bgRed.white [${new Timestamp(
        "YYYY-MM-DD HH:mm:ss"
      )}]} {red ${text}}`,
      ...args
    );
  }
}

export default new Logger();
