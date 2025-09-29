// 25 preguntas incluidas
const questions = [
  { id: 1, text: "She was tired, ___ she went to bed early.", options: ["although","so","but","because"], correct: "so" },
  { id: 2, text: "I studied hard; ___, I passed the test.", options: ["however","therefore","because","although"], correct: "therefore" },
  { id: 3, text: "___ he was late, he still got the job.", options: ["Because","Although","Therefore","And"], correct: "Although" },
  { id: 4, text: "I didn’t go to the party ___ I was sick.", options: ["so","although","because","but"], correct: "because" },
  { id: 5, text: "He is rich ___ not happy.", options: ["and","but","so","because"], correct: "but" },
  { id: 6, text: "I will go ___ it rains.", options: ["unless","if","even if","because"], correct: "even if" },
  { id: 7, text: "___ she tried her best, she failed the test.", options: ["Although","Because","So","And"], correct: "Although" },
  { id: 8, text: "He didn’t study; ___, he failed.", options: ["because","so","therefore","although"], correct: "therefore" },
  { id: 9, text: "She talks a lot ___ she is very shy.", options: ["but","because","so","and"], correct: "but" },
  { id: 10, text: "You can come with us ___ you want.", options: ["unless","if","because","although"], correct: "if" },
  { id: 11, text: "We missed the bus ___ we left home late.", options: ["although","because","but","so"], correct: "because" },
  { id: 12, text: "It was raining; ___, we went hiking.", options: ["however","because","so","although"], correct: "however" },
  { id: 13, text: "They studied hard ___ they failed.", options: ["although","because","so","if"], correct: "although" },
  { id: 14, text: "I won't go ___ it stops raining.", options: ["unless","if","because","although"], correct: "unless" },
  { id: 15, text: "She loves him ___ he doesn't love her.", options: ["although","because","so","if"], correct: "although" },
  { id: 16, text: "He is tired ___ he worked all day.", options: ["because","but","so","although"], correct: "because" },
  { id: 17, text: "He worked hard ___ he could pass the exam.", options: ["because","so that","although","but"], correct: "so that" },
  { id: 18, text: "We can go out ___ you finish your homework.", options: ["so","if","although","because"], correct: "if" },
  { id: 19, text: "I bought a jacket ___ it was cold.", options: ["because","although","so","and"], correct: "because" },
  { id: 20, text: "___ he was rich, he lived a simple life.", options: ["Although","Because","So","If"], correct: "Although" },
  { id: 21, text: "I didn't go swimming ___ the water was too cold.", options: ["because","so","although","if"], correct: "because" },
  { id: 22, text: "___ you arrive early, you can help me.", options: ["If","Although","Because","Unless"], correct: "If" },
  { id: 23, text: "They were hungry, ___ they ordered pizza.", options: ["so","because","although","if"], correct: "so" },
  { id: 24, text: "He likes tea ___ he doesn't like coffee.", options: ["but","and","so","because"], correct: "but" },
  { id: 25, text: "___ it was raining, we went outside.", options: ["Although","Because","If","Unless"], correct: "Although" }
];

let currentQuestionIndex = 0;
let score = 0;

// Pantallas
const joinScreen = document.getElementById("join-screen");
const questionScreen = document.getElementById("question-screen");
const gameOverScreen = document.getElementById("gameover-screen");

// Elementos de pregunta
const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const finalScore = document.getElementById("final-score");

// Botón de inicio
const startBtn = document.getElementById("start-btn");
startBtn.addEventListener("click", startGame);

// Iniciar juego
function startGame() {
  joinScreen.classList.add("hidden");
  questionScreen.classList.remove("hidden");
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
}

// Mostrar pregunta
function showQuestion() {
  const question = questions[currentQuestionIndex];
  questionNumber.textContent = `Question ${currentQuestionIndex + 1} / ${questions.length}`;
  questionText.textContent = question.text;
  optionsContainer.innerHTML = "";

  question.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("option-btn");
    btn.addEventListener("click", () => selectAnswer(option, btn));
    optionsContainer.appendChild(btn);
  });
}

// Seleccionar respuesta
function selectAnswer(answer, btn) {
  const question = questions[currentQuestionIndex];

  // Deshabilitar todos los botones
  const allButtons = optionsContainer.querySelectorAll("button");
  allButtons.forEach(b => b.disabled = true);

  if (answer === question.correct) {
    btn.classList.add("correct");
    score++;
  } else {
    btn.classList.add("wrong");
    // Mostrar cuál era la correcta
    allButtons.forEach(b => {
      if (b.textContent === question.correct) {
        b.classList.add("correct");
      }
    });
  }

  // Esperar 1 segundo antes de pasar a la siguiente pregunta
  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showGameOver();
    }
  }, 1000);
}

// Juego terminado
function showGameOver() {
  questionScreen.classList.add("hidden");
  gameOverScreen.classList.remove("hidden");
  finalScore.textContent = `Your score: ${score} / ${questions.length}`;
}
