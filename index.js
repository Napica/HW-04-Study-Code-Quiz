// Elements to pull from
var startTheQuiz = document.getElementById("start-Btn");
var quizContent = document.getElementById("quizQuestionBox");
var questionEl = document.getElementById("question");
var choice1 = document.getElementById("answer1");
var choice2 = document.getElementById("answer2");
var choice3 = document.getElementById("answer3");
var choice4 = document.getElementById("answer4");
var score = 0
var currentQuestionIndex = 0
var quizQuestions = questions.question

// Arrary of objects to contain questions and answers
var questions = [
  {
    question: "Commonly used data types DO NOT include: ",
    choices: ["1) Strings, 2) Booleans, 3) Alerts, 4) Numbers"],
    correctAnswer: "3) alerts"
  },
  {
    question: "The condition of an If/Else statement is enclosed within____.",
    choice1: ["1) Quotes, 2) Curley Brackets, 3) Parentheses, 4) Square Brackets"],
    correctAnswer: "2) Curley Brackets",
  },
  {
    question: "Arrays in JavaScript can be used to store _______.",
    choice1: ["1) Numbers and Strings,2) Other Arrays, 3) Booleans, 4) All of the above"],
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
    choice1: ["1) console.log(), 2) JavaScript, 3) for loops, 4) If/Else conditionals"],
    correctAnswer: "1) console.log()",
  },
];


startTheQuiz.addEventListener("click", startQuiz);

function startQuiz() {
  startTheQuiz.classList.add("hide");
  quizContent.classList.remove("hide");
  Quiz();
}

// function Quiz() {
//   for (var i = 0; i < );
// }

function showQuestion(question){
  questionEl.innerText = question.question;
}