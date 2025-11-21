import express from "express";
import noteRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";

const app = express();

connectDB();

app.use("/api/notes", noteRoutes);

app.listen(5001, () => {
  console.log("server esta rodando na porta: 5001");
});
