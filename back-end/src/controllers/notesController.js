import Note from "../models/Note.js";

export async function getAllNotes(_, res) {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    console.error("Erro no controle de getAllNotes", error);
    res.status(500).json({ message: "Erro interno no server" });
  }
}

export async function getNoteById(req, res) {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) return res.status(404).json({ message: "Nota não encontrada" });

    res.json(note);
  } catch (error) {
    console.error("Erro no controle de getNoteById", error);
    res.status(500).json({ message: "Erro interno no server" });
  }
}

export async function createANote(req, res) {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });

    const savedNote = await note.save();
    res.status(201).json(savedNote);
  } catch (error) {
    console.error("Erro no controle de createNote", error);
    res.status(500).json({ message: "Erro interno no server" });
  }
}

export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      {
        new: true,
      }
    );

    if (!updatedNote)
      return res.status(404).json({ message: "Nota não encontrada" });

    res.status(200).json(updatedNote);
  } catch (error) {
    if (error.name === "CastError" && error.kind === "ObjectId") {
      return res.status(404).json({ message: "Nota não encontrada" });
    }

    console.error("Erro inesperado em updateNote:", error);
    res.status(500).json({ message: "Erro interno no servidor" });
  }
}

export async function deleteNote(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);

    if (!deletedNote)
      return res.status(404).json({ message: "Nota não encontrada" });

    res.status(200).json({ message: "Nota deletada com sucesso!" });
  } catch (error) {
    console.error("Erro no controle de createNote", error);
    res.status(500).json({ message: "Erro interno no server" });
  }
}
