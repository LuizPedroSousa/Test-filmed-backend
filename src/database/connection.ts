import logger from "../utils/logger";
import { client } from "./client";

class CreateMongodbConnection {
  async connect() {
    try {
      await client.$connect();
      logger.success("Sucesso ao conectar com o MongoDB. 🔥");
    } catch (err: any) {
      logger.error(`Erro ao tentar conectar no MongoDB 🚨`, err);
    }
  }
}

export default new CreateMongodbConnection();
