import mongoose from "mongoose";

class CreateMongodbConnection {
  async connect() {
    try {
      await mongoose.connect(process.env.MONGODB_URI as string);
      console.log("Sucesso ao conectar com o MongoDB. 🔥");
    } catch (err: any) {
      console.error(`Erro ao tentar conectar no MongoDB: ${err}`);
    }
  }
}

export default new CreateMongodbConnection();
