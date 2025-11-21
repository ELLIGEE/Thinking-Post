import express from "express";
import {
  getAllNotes,
  createANote,
  updateNote,
  deleteNote,
} from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);

router.post("/", createANote);

router.get("/:id", updateNote);

router.get("/:id", deleteNote);

export default router;
