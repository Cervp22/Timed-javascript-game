const questions = [
  {
    question:
      "If a variable is going to be constant what variation do you use?",
    options: ["var", "const", "let", "pez"],
    correctAnswer: "const",
  },
  {
    question: "What does the 'this' keyword do in javascript?",
    options: [
      "'This' key word refers to the object from where it was called ",
      "'This' key word refers to the document of the page",
      "'This' keyword refers to only the word itself",
      "'This' keyword refer to the computer being used",
    ],
    correctAnswer:
      "This key word refers to the object from where it was called",
  },
  {
    question: "What symbol is used for single-line comments in javascript",
    options: ["&", "$", "//", "^"],
    correctAnswer: "//",
  },
  {
    question: "How do you define text-based data?",
    options: [
      "() - parathesis",
      " * - astic",
      '"" - quotations',
      "$ - dollar sign",
    ],
    correctAnswer: `"" - quotations`,
  },
  {
    question: "What are undeclared variables?",
    options: [
      "variables in the code but are hard find",
      "variables that mispelled",
      "variables that play audio",
      "variables that do not exist in a program and are not declared",
    ],
    correctAnswer:
      "variables that do not exist in a program and are not declared",
  },
];

const startbtn = document.getElementById("start-btn");

let time = 60;
let timerId;
const timer = document.getElementById("timer");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");

let count = 0;

function visibility() {
  btn1.style.visibility = "inherit";
  btn2.style.visibility = "inherit";
  btn3.style.visibility = "inherit";
  btn4.style.visibility = "inherit";
  startbtn.style.visibility = "hidden";

  for (var i = 0; i < 4; i++) {
    const button = document.querySelector(`#btn${i + 1}`);
    button.value = questions[count].options[i];
    button.addEventListener("click", function (evt) {
      let correctAnswer = questions[0].correctAnswer;
      if (evt.target.value == correctAnswer) {
        console.log("test successful");
      } else {
        console.log("test failed", evt.target.value);
      }
      question2();
    });
  }
  return;
}

function question2() {
  count = 1;
  btn1.textContent = questions[count].options[0];
  btn2.textContent = questions[count].options[1];
  btn3.textContent = questions[count].options[2];
  btn4.textContent = questions[count].options[3];
  document.getElementById("question-title").textContent =
    questions[count].question;

  for (var i = 0; i < 4; i++) {
    const button = document.querySelector(`#btn${i + 1}`);
    button.value = questions[count].options[i];
    button.addEventListener("click", function (evt) {
      let correctAnswer = questions[count].correctAnswer;
      if (evt.target.value == correctAnswer) {
        console.log("test successful", evt.target.value);
      } else {
        console.log("test");
      }
      //question3();
    });
  }
}

function question3() {
  count = 2;
  btn1.textContent = questions[count].options[0];
  btn2.textContent = questions[count].options[1];
  btn3.textContent = questions[count].options[2];
  btn4.textContent = questions[count].options[3];
  document.getElementById("question-title").textContent =
    questions[count].question;
}
startbtn.addEventListener("click", function () {
  btn1.textContent = questions[count].options[0];
  btn2.textContent = questions[count].options[1];
  btn3.textContent = questions[count].options[2];
  btn4.textContent = questions[count].options[3];

  timerId = setInterval(function () {
    time--;
    timer.textContent = time;
    if (time <= 0) {
      clearInterval(timerId);
    }
  }, 1000);

  document.getElementById("question-title").textContent =
    questions[count].question;

  visibility();
});
