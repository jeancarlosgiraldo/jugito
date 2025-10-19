// ==================== QUESTIONS ====================
const questions = [

  { 
    id: 1, 
    text: "She enjoys reading novels, ___ she also loves writing short stories.", 
    options: ["but","because","and","although"], 
    correct: "and",
    image: "https://media.istockphoto.com/id/1271367191/es/vector/ni%C3%B1a-escribiendo-en-diario-o-diario-vector-plano-aislado.jpg?s=612x612&w=0&k=20&c=Y-nXpGh96R-LJ7lyz7W7OgHv9ZdN2-YHAbIzDUv85I0="
  },
  { 
    id: 2, 
    text: "He not only studies hard, ___ he also helps his classmates.", 
    options: ["so","but","and","but also"], 
    correct: "but also",
    image: "https://static.vecteezy.com/system/resources/previews/047/785/477/non_2x/a-group-of-students-sit-around-a-table-studying-together-with-books-laptops-and-other-materials-they-are-focused-engaged-and-working-well-as-a-team-free-vector.jpg"
  },

  // CONTRAST
  { 
    id: 3, 
    text: "He’s very intelligent, ___ he sometimes makes silly mistakes.", 
    options: ["therefore","although","however","because"], 
    correct: "however",
    image: "https://static.vecteezy.com/system/resources/previews/015/176/619/non_2x/pensive-young-man-with-open-head-think-of-problem-solution-or-generate-idea-confused-male-brainstorm-solve-trouble-or-look-for-innovative-thought-illustration-vector.jpg"
  },
  { 
    id: 4, 
    text: "___ the weather was terrible, they continued their journey.", 
    options: ["Although","Because","So","Therefore"], 
    correct: "Although",
    image: "https://www.shutterstock.com/image-vector/happy-kids-walk-under-umbrella-600nw-2164977147.jpg"
  },
  { 
    id: 5, 
    text: "I wanted to buy the blue shirt; ___, it was too expensive.", 
    options: ["however","because","so","and"], 
    correct: "however",
    image: "https://media.istockphoto.com/id/1133815061/es/vector/azul-marino-camiseta-vector-para-plantilla.jpg?s=612x612&w=0&k=20&c=F-vST6NwontrFjSeeL86vjlVF6kbux8V_vEHLgqddcY="
  },

  // CAUSE / EFFECT
  { 
    id: 6, 
    text: "The flight was delayed ___ there was a storm.", 
    options: ["because","although","so","but"], 
    correct: "because",
    image: "https://www.shutterstock.com/image-vector/vector-cartoon-illustration-white-airliner-600nw-1179161980.jpg"
  },
  { 
    id: 7, 
    text: "The power went out; ___, the concert was canceled.", 
    options: ["because","therefore","although","but"], 
    correct: "therefore",
    image: "https://www.shutterstock.com/image-photo/cancelled-concert-other-event-avoid-600nw-1674223579.jpg"
  },
  { 
    id: 8, 
    text: "She failed the test ___ she didn’t study enough.", 
    options: ["although","because","so","if"], 
    correct: "because",
    image: "https://cdni.iconscout.com/illustration/premium/thumb/nino-deprimido-mostrando-los-resultados-de-su-examen-illustration-svg-download-png-8041538.png"
  },

  // SEQUENCE
  { 
    id: 9, 
    text: "First, wash your hands; ___, start preparing the meal.", 
    options: ["therefore","however","then","because"], 
    correct: "then",
    image: "https://img.freepik.com/vector-premium/mama-ensena-su-hijo-lavarse-manos-antes-comer-fruta-tocar-cualquier-cosa-situacion-pandemia_465127-212.jpg?w=360"
  },
  { 
    id: 10, 
    text: "He finished his report; ___, he sent it to his boss.", 
    options: ["finally","because","however","and"], 
    correct: "finally",
    image: "https://static.vecteezy.com/system/resources/previews/002/607/271/non_2x/man-working-office-vector.jpg"
  },
  { 
    id: 11, 
    text: "She checked the door, turned off the lights, and ___ went to bed.", 
    options: ["so","then","therefore","because"], 
    correct: "then",
    image: "https://img.freepik.com/vector-premium/dormitorio-femenino-noche-ilustracion-plana-interior-finca-lujo-muebles-modernos-cama-dibujos-animados-cojines-almohada-forma-corazon-imagen-moderna-arriba-mesitas-noche-lamparas-plantas_151150-1507.jpg?w=360"
  },

  // EXEMPLIFICATION
  { 
    id: 12, 
    text: "Many fruits are rich in vitamins, ___ oranges and kiwis.", 
    options: ["for instance","therefore","although","because"], 
    correct: "for instance",
    image: "https://previews.123rf.com/images/jemastock/jemastock1907/jemastock190723604/126427127-fresh-fruit-nutrition-healthy-grouped-colorful-orange-and-kiwi-fitness-diet-options-drawing-vector.jpg"
  },
  { 
    id: 13, 
    text: "Some animals, ___ dolphins, are known for their intelligence.", 
    options: ["however","for example","because","so"], 
    correct: "for example",
    image: "https://static.guiainfantil.com/media/56434/c/como-hacer-paso-a-paso-un-dibujo-de-un-delfin-lg.jpg"
  },

  // CONCLUSION
  { 
    id: 14, 
    text: "It rained all night; ___, the streets were flooded.", 
    options: ["however","as a result","because","although"], 
    correct: "as a result",
    image: "https://media.istockphoto.com/id/959860030/es/vector/lluvia-inund%C3%B3-la-ciudad.jpg?s=612x612&w=0&k=20&c=vpo6C2cgVpsKXF6NpkGliL0MF55yHzwGhDiOGhjUCc0="
  },
  { 
    id: 15, 
    text: "He practiced for months; ___, he won the competition.", 
    options: ["for instance","finally","because","although"], 
    correct: "finally",
    image: "https://www.shutterstock.com/image-vector/cartoon-boy-winning-race-finish-600nw-2682753719.jpg"
  }
];
 
// ==================== SHUFFLE FUNC ====================
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// ==================== VARIABLES ====================
let currentQuestionIndex = 0;
let score = 0;
let timerInterval;
let timeLeft = 15;
let questionStartTime = 0;
let playerName = "";
let correctAnswers = 0;
let totalElapsedTime = 0;

let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
let bestRecord = JSON.parse(localStorage.getItem("bestRecord")) || null;

// Pantallas
const joinScreen = document.getElementById("join-screen");
const questionScreen = document.getElementById("question-screen");
const gameOverScreen = document.getElementById("gameover-screen");

// Elementos
const playerInput = document.getElementById("player-name");
const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const imageContainer = document.getElementById("image-container");
const finalScore = document.getElementById("final-score");
const timerDisplay = document.getElementById("timer");

const scoreboard = document.getElementById("scoreboard");
const displayName = scoreboard.querySelector("#display-name");
const correctDisplay = scoreboard.querySelector("#correct-answers");
const bestTimeDisplay = scoreboard.querySelector("#best-time");

// Score display con bonus
let scoreDisplay = scoreboard.querySelector("#score-display");
if(!scoreDisplay){
  scoreDisplay = document.createElement("p");
  scoreDisplay.id = "score-display";
  scoreboard.appendChild(scoreDisplay);
}

// ==================== RANKING FINAL ====================
const leaderboardContainer = document.createElement("div");
leaderboardContainer.id = "leaderboard";
gameOverScreen.appendChild(leaderboardContainer);

// ==================== BOTÓN INICIO ====================
document.getElementById("start-btn").addEventListener("click", startGame);

// ==================== FUNCIONES ====================

// Iniciar juego
function startGame() {
  playerName = playerInput.value.trim();
  if (playerName === "") {
    alert("Please enter your name before starting.");
    return;
  }

  // Limpiar input al reiniciar
  playerInput.value = "";

  // Mezclar preguntas al inicio
  shuffleArray(questions);

  joinScreen.classList.add("hidden");
  questionScreen.classList.remove("hidden");
  gameOverScreen.classList.add("hidden");
  scoreboard.classList.remove("hidden");

  currentQuestionIndex = 0;
  score = 0;
  correctAnswers = 0;
  totalElapsedTime = 0;

  displayName.textContent = playerName;
  correctDisplay.textContent = "0";
  bestTimeDisplay.textContent = bestRecord ? `${bestRecord.time}s (${bestRecord.name})` : "—";
  scoreDisplay.textContent = `Score: 0`;

  showQuestion();
}

// Mostrar pregunta
function showQuestion() {
  clearInterval(timerInterval);
  timeLeft = 15;
  questionStartTime = Date.now();

  const question = questions[currentQuestionIndex];
  questionNumber.textContent = `Question ${currentQuestionIndex + 1} / ${questions.length}`;
  questionText.textContent = question.text;
  optionsContainer.innerHTML = "";
  imageContainer.innerHTML = "";
  timerDisplay.textContent = `⏱️ ${timeLeft}s`;

  // Mezclar opciones
  const shuffledOptions = [...question.options];
  shuffleArray(shuffledOptions);

  const img = document.createElement("img");
  img.src = question.image;
  img.alt = "Question Image";
  img.classList.add("question-image");
  imageContainer.appendChild(img);

  shuffledOptions.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("option-btn");
    btn.disabled = false;
    btn.addEventListener("click", () => selectAnswer(option));
    optionsContainer.appendChild(btn);
  });

  timerInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `⏱️ ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      autoFailQuestion();
    }
  }, 1000);
}

// Seleccionar respuesta
function selectAnswer(answer) {
  clearInterval(timerInterval);
  const question = questions[currentQuestionIndex];
  const allButtons = optionsContainer.querySelectorAll("button");
  allButtons.forEach(b => b.disabled = true);

  const elapsedTime = (Date.now() - questionStartTime) / 1000;
  totalElapsedTime += elapsedTime;
  let bonus = 0;

  if (elapsedTime <= 3) bonus = 2;
  else if (elapsedTime <= 5) bonus = 1;

  allButtons.forEach(b => {
    if (b.textContent === question.correct) b.classList.add("correct");
    if (b.textContent === answer && answer !== question.correct) b.classList.add("wrong");
  });

  if (answer === question.correct) {
    score += 1 + bonus;
    correctAnswers++;
    correctDisplay.textContent = correctAnswers;
  }

  scoreDisplay.textContent = `Score: ${score} (+${bonus} bonus)`;

  setTimeout(nextQuestion, 1000);
}

// Si se acaba el tiempo
function autoFailQuestion() {
  const question = questions[currentQuestionIndex];
  const allButtons = optionsContainer.querySelectorAll("button");
  allButtons.forEach(b => {
    b.disabled = true;
    if (b.textContent === question.correct) b.classList.add("correct");
  });
  totalElapsedTime += 15;
  scoreDisplay.textContent = `Score: ${score}`;
  setTimeout(nextQuestion, 1000);
}

// Siguiente pregunta
function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) showQuestion();
  else showGameOver();
}

// Mostrar pantalla final
function showGameOver() {
  clearInterval(timerInterval);
  questionScreen.classList.add("hidden");
  gameOverScreen.classList.remove("hidden");
  scoreboard.classList.add("hidden");

  finalScore.textContent = `${playerName}, your score: ${score} / ${questions.length * 3}`;

  const playerData = {
    name: playerName,
    score: score,
    correct: correctAnswers,
    time: totalElapsedTime.toFixed(2)
  };

  leaderboard.push(playerData);
  leaderboard.sort((a, b) => {
    if(b.score === a.score) return parseFloat(a.time) - parseFloat(b.time);
    return b.score - a.score;
  });
  leaderboard = leaderboard.slice(0, 10);
  localStorage.setItem("leaderboard", JSON.stringify(leaderboard));

  if (!bestRecord || totalElapsedTime < parseFloat(bestRecord.time)) {
    bestRecord = { name: playerName, time: totalElapsedTime.toFixed(2) };
    localStorage.setItem("bestRecord", JSON.stringify(bestRecord));
  }

  showLeaderboard();
}

// Mostrar tabla final
function showLeaderboard() {
  document.getElementById("leaderboard").innerHTML = `
    <h3>🏆 Top Players</h3>
    <table class="leaderboard-table">
      <tr>
        <th>Rank</th>
        <th>Name</th>
        <th>Score</th>
        <th>Correct</th>
        <th>Time (s)</th>
      </tr>
      ${leaderboard
        .map((p, i) => `
        <tr>
          <td>${i + 1}</td>
          <td>${p.name}</td>
          <td>${p.score}</td>
          <td>${p.correct}</td>
          <td>${p.time}</td>
        </tr>`).join("")}
    </table>
    <p><strong>🏁 Fastest Player:</strong> ${bestRecord ? `${bestRecord.name} (${bestRecord.time}s)` : "—"}</p>
  `;
}
// ==================== REINICIAR JUEGO ====================
document.getElementById("try-again-btn").addEventListener("click", resetGame);

function resetGame() {
  clearInterval(timerInterval);

  // Ocultar pantallas actuales
  gameOverScreen.classList.add("hidden");
  questionScreen.classList.add("hidden");
  scoreboard.classList.add("hidden");

  // Limpiar texto final y leaderboard
  finalScore.textContent = "";
  document.getElementById("leaderboard").innerHTML = "";

  // Reiniciar valores
  playerInput.value = "";
  currentQuestionIndex = 0;
  score = 0;
  correctAnswers = 0;
  totalElapsedTime = 0;

  correctDisplay.textContent = "0";
  scoreDisplay.textContent = `Score: 0`;

  // Mostrar pantalla de inicio
  joinScreen.classList.remove("hidden");
}
