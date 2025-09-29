const socket = io();

// Pantallas
const joinScreen = document.getElementById("join-screen");
const waitingScreen = document.getElementById("waiting-screen");
const questionScreen = document.getElementById("question-screen");
const gameOverScreen = document.getElementById("gameover-screen");
const leaderboardScreen = document.getElementById("leaderboard-screen");
const adminPanel = document.getElementById("admin-panel");

// Elementos
const joinBtn = document.getElementById("join-btn");
const nameInput = document.getElementById("player-name");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const questionNumber = document.getElementById("question-number");
const timerElement = document.getElementById("timer");
const leaderboardList = document.getElementById("leaderboard-list");
const finalScore = document.getElementById("final-score");

// Botones
const playAgainBtn = document.getElementById("play-again-btn"); // GameOver
const viewLeaderboardBtn = document.getElementById("view-leaderboard-btn");
const playAgainBtnLeaderboard = document.getElementById("play-again-btn-leaderboard");

// Admin
const adminQuestion = document.getElementById("admin-question");
const adminLeaderboard = document.getElementById("admin-leaderboard");

const ADMIN_NAME = "elmochito";
let currentQuestion = null;
let questionCount = 0;
let timer;

// Habilitar botón si hay texto
nameInput.addEventListener("input", () => {
  joinBtn.disabled = nameInput.value.trim() === "";
});

// Unirse al juego
joinBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  if (!name) return;

  socket.emit("joinGame", name);

  if (name === ADMIN_NAME) {
    showAdminPanel();
  } else {
    joinScreen.classList.add("hidden");
    waitingScreen.classList.remove("hidden");
  }
});

// Mostrar panel admin
function showAdminPanel() {
  const startBtn = document.createElement("button");
  startBtn.textContent = "Start Game";
  startBtn.style.marginTop = "10px";
  joinScreen.appendChild(startBtn);

  startBtn.addEventListener("click", () => {
    socket.emit("startGame");
    startBtn.style.display = "none";
    joinScreen.classList.add("hidden");
    questionScreen.classList.remove("hidden");
    adminPanel.classList.remove("hidden");
  });

  alert("Welcome Admin! Click 'Start Game' when ready.");
}

// Recibir pregunta
socket.on("newQuestion", (question) => {
  currentQuestion = question;
  questionCount++;
  renderQuestion(question);
  startTimer();

  // Admin ve la pregunta
  if (adminPanel) {
    adminQuestion.textContent = `Pregunta actual: ${question.text}`;
  }
});

// Fin de juego
socket.on("gameOver", (data) => {
  questionScreen.classList.add("hidden");
  gameOverScreen.classList.remove("hidden");

  finalScore.textContent = "Game Over!";

  leaderboardList.innerHTML = "";
  data.leaderboard.forEach(p => {
    const li = document.createElement("li");
    li.textContent = `${p.name}: ${p.score}`;
    leaderboardList.appendChild(li);
  });

  // Admin leaderboard
  if (adminLeaderboard) {
    adminLeaderboard.innerHTML = "";
    data.leaderboard.forEach(p => {
      const li = document.createElement("li");
      li.textContent = `${p.name}: ${p.score}`;
      adminLeaderboard.appendChild(li);
    });
  }
});

// Respuesta correcta/incorrecta desde el server
socket.on("answerResult", ({ correct, selected }) => {
  const buttons = optionsContainer.querySelectorAll("button");
  buttons.forEach(btn => {
    btn.disabled = true; // bloquear botones
    if (btn.textContent === selected) {
      btn.classList.add(correct ? "correct" : "incorrect");
    }
  });
});

// Renderizar pregunta
function renderQuestion(question) {
  questionText.textContent = question.text;
  questionNumber.textContent = `Question ${questionCount}`;
  optionsContainer.innerHTML = "";

  question.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.classList.add("option-btn");
    btn.textContent = opt;
    btn.addEventListener("click", () => {
      socket.emit("submitAnswer", { questionId: question.id, answer: opt });
      clearInterval(timer);
      // Bloquea todos los botones inmediatamente
      optionsContainer.querySelectorAll("button").forEach(b => b.disabled = true);
    });
    optionsContainer.appendChild(btn);
  });
}

// Timer
function startTimer() {
  let timeLeft = 10;
  timerElement.textContent = timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    timerElement.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      optionsContainer.querySelectorAll("button").forEach(b => b.disabled = true);
    }
  }, 1000);
}

// Botones finales
if (playAgainBtn) {
  playAgainBtn.addEventListener("click", () => window.location.reload());
}

if (viewLeaderboardBtn) {
  viewLeaderboardBtn.addEventListener("click", () => {
    gameOverScreen.classList.add("hidden");
    leaderboardScreen.classList.remove("hidden");
  });
}

if (playAgainBtnLeaderboard) {
  playAgainBtnLeaderboard.addEventListener("click", () => window.location.reload());
}
