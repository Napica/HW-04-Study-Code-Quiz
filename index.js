var startTheQuiz = document.getElementById("start-Btn");
var quizContent = document.getElementById("quizQuestionBox");
var question = document.getElementById("question");
var choice1 = document.getElementById("answer1");
var choice2 = document.getElementById("answer2");
var choice3 = document.getElementById("answer3");
var choice4 = document.getElementById("answer4");

// Arrary of objects to contain questions and answers
var questions = [
  {
    question: "Commonly used data types DO NOT include: ",
    choice1: "1) Strings",
    choice2: "2) Booleans",
    choice3: "3) Alerts",
    choice4: "4) Numbers",
    correctAnswer: "answer3",
  },
  {
    question: "The condition of an If/Else statement is enclosed within____.",
    choice1: "1) Quotes",
    choice2: "2) Curley Brackets",
    choice3: "3) Parentheses",
    choice4: "4) Square Brackets",
    correctAnswer: "answer2",
  },
  {
    question: "Arrays in JavaScript can be used to store _______.",
    choice1: "1) Numbers and Strings",
    choice2: "2) Other Arrays",
    choice3: "3) Booleans",
    choice4: "4) All of the above",
    correctAnswer: "answer4",
  },
  {
    question:
      "String values must be enclosed within _______ when being assigned to variables.",
    choice1: "1) Commas",
    choice2: "2) Curly Brackets",
    choice3: "3) Quotes",
    choice4: "4) Parentheses",
    correctAnswer: "answer3",
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
    choice1: "1) console.log()",
    choice2: "2) JavaScript",
    choice3: "3) for loops",
    choice4: "4) If/Else conditionals",
    correctAnswer: "answer1",
  }
];

startTheQuiz.addEventListener('click', startQuiz);

function startQuiz(){
    // console.log("This registered");
    startTheQuiz.classList.add("hide");
   quizContent.classList.remove("hide");
}