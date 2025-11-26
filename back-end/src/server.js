import express from "express";
import noteRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001

connectDB();

//middleware
app.use(express.json())
app.use(rateLimiter)
//app.use((req, res, next) => {
//  console.log(`Metodo req é ${req.method} & a URL da req é ${req.url}`)
//  next();
//})

app.use("/api/notes", noteRoutes);

app.listen(PORT, () => {
  console.log("server esta rodando na PORT:", PORT);
});
