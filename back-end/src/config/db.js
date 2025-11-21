import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Força o caminho do .env (funciona 100% no Windows com ESM)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

export const connectDB = async () => {
  console.log("URI lida:", process.env.MONGO_URI ? "OK" : "UNDEFINED"); // ← debug
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB conectado com sucesso!");
  } catch (error) {
    console.error("Erro ao conectar com MongoDB:", error.message);
    process.exit(1);
  }
};