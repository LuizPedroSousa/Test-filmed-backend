import mongoose from "mongoose";
const createMongodbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("Sucesso ao conectar com o MongoDB. 🔥");
  } catch (err: any) {
    console.error(`Erro ao tentar conectar no MongoDB: ${err}`);
  }
};

export { createMongodbConnection };
