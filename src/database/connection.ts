import mongoose from "mongoose";
import { client } from "../prisma/client";

class CreateMongodbConnection {
  async connect() {
    try {
      await client.$connect();
      console.log("Sucesso ao conectar com o MongoDB. 🔥");
    } catch (err: any) {
      console.error(`Erro ao tentar conectar no MongoDB 🚨: ${err}`);
    }
  }
}

export default new CreateMongodbConnection();
