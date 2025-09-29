const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");
const questions = require("./questions");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 3000;

// Archivos estáticos
app.use(express.static(__dirname));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

let players = {};
let currentQuestionIndex = 0;
let currentQuestion = null;
const QUESTION_TIME = 10; // segundos
let timer = null;

// Función para enviar la siguiente pregunta
function sendNextQuestion() {
  if (currentQuestionIndex >= questions.length) {
    // Fin del juego
    io.emit("gameOver", { leaderboard: Object.values(players).sort((a, b) => b.score - a.score) });
    currentQuestionIndex = 0;
    currentQuestion = null;
    clearInterval(timer);
    return;
  }

  currentQuestion = questions[currentQuestionIndex];
  currentQuestionIndex++;
  io.emit("newQuestion", currentQuestion);

  let timeLeft = QUESTION_TIME;
  io.emit("timerUpdate", timeLeft);

  clearInterval(timer);
  timer = setInterval(() => {
    timeLeft--;
    io.emit("timerUpdate", timeLeft);

    if (timeLeft <= 0) {
      clearInterval(timer);
      io.emit("questionTimeout", currentQuestion.id);
      sendNextQuestion(); // siguiente pregunta automáticamente
    }
  }, 1000);
}

// Socket.io
io.on("connection", (socket) => {
  console.log("🟢 Player connected:", socket.id);

  socket.on("joinGame", (name) => {
    players[socket.id] = { name, score: 0 };
    io.emit("playersUpdate", Object.values(players));
    console.log(`👤 ${name} joined`);
  });

  socket.on("startGame", () => {
    currentQuestionIndex = 0;
    Object.values(players).forEach((p) => p.score = 0);
    sendNextQuestion();
  });

  socket.on("submitAnswer", ({ questionId, answer }) => {
    if (!currentQuestion || currentQuestion.id !== questionId) return;

    if (answer === currentQuestion.correct) {
      players[socket.id].score++;
    }

    io.emit("playersUpdate", Object.values(players));
  });

  socket.on("getLeaderboard", () => {
    io.emit("leaderboardData", Object.values(players).sort((a, b) => b.score - a.score));
  });

  socket.on("disconnect", () => {
    console.log("🔴 Player disconnected:", socket.id);
    delete players[socket.id];
    io.emit("playersUpdate", Object.values(players));
  });
});

server.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
