const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;
const RANKING_FILE = path.join(__dirname, "ranking.json");

// Middleware
app.use(express.static(__dirname));
app.use(express.json());

// ==================== RUTAS ====================

// Página principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Obtener el ranking actual
app.get("/api/ranking", (req, res) => {
  try {
    if (!fs.existsSync(RANKING_FILE)) {
      fs.writeFileSync(RANKING_FILE, "[]", "utf-8");
    }
    const data = fs.readFileSync(RANKING_FILE, "utf-8");
    const ranking = JSON.parse(data);
    res.json(ranking);
  } catch (error) {
    console.error("❌ Error leyendo ranking:", error);
    res.status(500).json({ error: "Error reading ranking" });
  }
});

// Guardar nuevo puntaje
app.post("/api/ranking", (req, res) => {
  const { name, score, time } = req.body;

  if (!name || score === undefined || time === undefined) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    let ranking = [];

    if (fs.existsSync(RANKING_FILE)) {
      const data = fs.readFileSync(RANKING_FILE, "utf-8");
      ranking = JSON.parse(data);
    }

    // Agregar nuevo registro
    ranking.push({ name, score, time, date: new Date().toISOString() });

    // Ordenar por puntaje (descendente) y tiempo (ascendente)
    ranking.sort((a, b) => {
      if (b.score === a.score) return a.time - b.time;
      return b.score - a.score;
    });

    // Mantener solo los 10 mejores
    ranking = ranking.slice(0, 10);

    // Guardar archivo actualizado
    fs.writeFileSync(RANKING_FILE, JSON.stringify(ranking, null, 2), "utf-8");

    res.json({ success: true, ranking });
  } catch (error) {
    console.error("❌ Error guardando ranking:", error);
    res.status(500).json({ error: "Error saving ranking" });
  }
});

// ==================== INICIAR SERVIDOR ====================
app.listen(PORT, () => {
  console.log(`✅ Quiz corriendo en http://localhost:${PORT}`);
});
