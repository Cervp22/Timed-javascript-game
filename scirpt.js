const questions = [
  {
    question1:
      "If a variable is going to be constant what variation do you use?",
    options: {
      a: "var",
      b: "const",
      c: "let",
      d: "pez",
    },
    correctAnswer: "b",
  },
  {
    question2: "What does the 'this' keyword do in javascript?",
    optoins: {
      a: "'This' key word refers to the object from where it was called ",
      b: "'This key word refers to the document of the page",
      c: "'This' keyword refers to only the word itself",
      d: "'This' keyword refer to the computer being used",
    },
    correctAnswer: "a",
  },
  {
    question3: "What symbol is used for single-line comments in javascript",
    options: {
      a: "&",
      b: "$",
      c: "//",
      d: "^",
    },
    correctAnswer: "c",
  },
  {
    question4: "How do you define text-based data?",
    optoins: {
      a: "() - parathesis",
      b: " * - astic",
      c: '"" - quotations',
      d: "$ - dollar sign",
    },
    correctAnswer: "c",
  },
  {
    question5: "What are undeclared variables?",
    options: {
      a: "variables in the code but are hard find",
      b: "variables that mispelled",
      c: "variables that play audio",
      d: "variables that do not exist in a program and are not declared",
    },
    correctAnswer: "d",
  },
];

const startbtn = document.getElementById("start-btn");
/*
const timertext = document.getElementById("timer");

var seconds = 1000 * 60;
var min = seconds * 60;

//let count = ;

function startTimer() {
  setInterval(function () {
    count--;
    timertext.textContent = count;
  }, 1000);
}
startTimer();
*/

function visibility() {
  btn1.style.visibility = "inherit";
  btn2.style.visibility = "inherit";
  btn3.style.visibility = "inherit";
  btn4.style.visibility = "inherit";
  startbtn.style.visibility = "hidden";
  const answerButtons = document.querySelectorAll(".btn");
  console.log(answerButtons);

  for (var i = 0; i < NodeList.length; i++) {
    answerButtons.addEventListener("click", function () {
      console.log("buttons have been clicked");
    });
  }
}
startbtn.addEventListener("click", function () {
  const btn1 = (document.getElementById("btn1").textContent =
    questions[0].options.a);
  const btn2 = (document.getElementById("btn2").textContent =
    questions[0].options.b);
  const btn3 = (document.getElementById("btn3").textContent =
    questions[0].options.c);
  const btn4 = (document.getElementById("btn4").textContent =
    questions[0].options.d);
  const questiontext = (document.getElementById("question-title").textContent =
    questions[0].question1);
  visibility();
});
