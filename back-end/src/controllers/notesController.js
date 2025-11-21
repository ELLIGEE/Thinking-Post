export function getAllNotes(req, res) {
res.status(200).send("Você buscou as notas");
};

export function createANote(req, res) {
 res.status(201).send("Nota criada com sucesso!");
};

export function updateNote(req, res)  {
res.status(200).send("Nota alterada com sucesso!");
};

export function deleteNote(req, res) {
res.status(200).send("Nota deletada com sucesso!");
};