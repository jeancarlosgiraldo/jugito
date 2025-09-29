const express = require("express");
const path = require("path");
const questions = require("./questions");

const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos
app.use(express.static(__dirname));

// Ruta principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Endpoint para preguntas
app.get("/api/questions", (req, res) => {
  res.json(questions);
});

app.listen(PORT, () => {
  console.log(`✅ Quiz corriendo en http://localhost:${PORT}`);
});
