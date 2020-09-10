// Elements to pull from
var startPromptEl = document.getElementById("startPromt");
var startEl = document.querySelector(".start");
var startBtnEl = document.querySelector("#start-Btn");
var questionBoxEl = document.getElementById("quizQuestionBox");
var submitEl = document.getElementById("submit-score");
var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answerButtons");
var timerEl = document.getElementById("time");
var submitEl = document.getElementById("submit-score")

var secondsLeft = 180;
var score = 0;
var currentQuestionIndex = 0;

// Arrary of objects to contain questions and answers
var questions = [
  {
    question: "Commonly used data types DO NOT include: ",
    choice1: ["1) Strings", "2) Booleans", "3) Alerts", "4) Numbers"],
    correctAnswer: "3) alerts",
  },
  {
    question: "The condition of an If/Else statement is enclosed within____.",
    choice1: [
      "1) Quotes, 2) Curley Brackets, 3) Parentheses, 4) Square Brackets",
    ],
    correctAnswer: "2) Curley Brackets",
  },
  {
    question: "Arrays in JavaScript can be used to store _______.",
    choice1: [
      "1) Numbers and Strings,2) Other Arrays, 3) Booleans, 4) All of the above",
    ],
    correctAnswer: "4) All of the above",
  },
  {
    question:
      "String values must be enclosed within _______ when being assigned to variables.",
    choice1: ["1) Commas, 2) Curly Brackets, 3) Quotes, 4) Parentheses"],
    correctAnswer: "3) Quotes",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is: ",
    choice1: [
      "1) console.log(), 2) JavaScript, 3) for loops, 4) If/Else conditionals",
    ],
    correctAnswer: "1) console.log()",
  },
];

startBtnEl.addEventListener("click", function () {
  startEl.classList.add("hide");
  questionBoxEl.classList.remove("hide");
  // console.log("this works")
  showQuestion();
  setTimer();
});

function showQuestion() {
  if (currentQuestionIndex < questions.length) {
    questionEl.innerHTML = questions[currentQuestionIndex].question;
    for (var i = 0; i < questions[currentQuestionIndex].choice1.length; i++) {
      var newAnswer = document.createElement("button");
      newAnswer.textContent = questions[currentQuestionIndex].choice1[i];
      newAnswer.setAttribute("data-name", "data-choice-" + i);
      newAnswer.setAttribute(
        "style",
        "background:#ce6ace; text-align: center; margin: 10px; padding 10px;"
      );
      answerEl.append(newAnswer);
    }
  }
}

function setTimer() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      questionBoxEl.classList.add("hide");
      submitForm();
    }
  }, 10);
}

function submitForm() {
  submitEl.classList.remove("hide")
}