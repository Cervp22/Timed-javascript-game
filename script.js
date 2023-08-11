// Array of questions
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
      "This... key word refers to the object from where it was called",
      "This... key word refers to the document of the page",
      "This... keyword refers to only the word itself",
      "This... keyword refer to the computer being used",
    ],
    correctAnswer:
      "This... key word refers to the object from where it was called",
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
//Declared values connecting to the html elements
const startbtn = document.getElementById("start-btn");
const input = document.getElementById("nameInput");
const submitbtn = document.getElementById("submitbtn");
const highScore = document.getElementById("highscores");
const restartbtn = document.getElementById("restartbtn");

function reloadPage() {
  window.location.reload();
}
//when the high score button is clicke on
highScore.addEventListener("click", function () {
  btn1.style.visibility = "hidden";
  btn2.style.visibility = "hidden";
  btn3.style.visibility = "hidden";
  btn4.style.visibility = "hidden";
  startbtn.style.visibility = "hidden";
  document.getElementById("question-title").textContent = "Scores:";
  submitbtn.style.visibility = "hidden";
  input.style.visibility = "hidden";
  clearInterval(timerId);
  timer.style.visibility = "hidden";
  document.getElementById("score-list").style.display = "inherit ";
  document.getElementById("score1").textContent =
    localStorage.getItem("name") + ", Correct:" + score;

  //document.getElementById("question")
});
//global variable of the timer and setInterval
let time = 40;
let timerId;
const timer = document.getElementById("timer");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");

let count = 0;
let score = 0;
//count funciton that will switch questions button value as the coutn increases
function countAdd() {
  count = count + 1;
  btn1.textContent = questions[count].options[0];
  btn2.textContent = questions[count].options[1];
  btn3.textContent = questions[count].options[2];
  btn4.textContent = questions[count].options[3];
  document.getElementById("question-title").textContent =
    questions[count].question;
}
// eventlistener where the value is matched and if statement logic on what to do if they match or dont match
for (var i = 0; i < 4; i++) {
  const button = document.querySelector(`#btn${i + 1}`);
  button.addEventListener("click", function (evt) {
    var element = evt.target;
    if (element.textContent == questions[count].correctAnswer) {
      score = score + 1;
    } else {
      time = time - 10;
    }
    if (count == 4) {
      document.getElementById(
        "question-title"
      ).textContent = `Score: ${score}/5`;
      btn1.style.visibility = "hidden";
      btn2.style.visibility = "hidden";
      btn3.style.visibility = "hidden";
      btn4.style.visibility = "hidden";
      clearInterval(timerId);

      input.style.visibility = "inherit";
      submitbtn.style.visibility = "inherit";
      submitbtn.addEventListener("click", function () {
        let name = input.value;
        console.log(name);
        localStorage.setItem("name", input.value);
        const list = document.getElementById("score-list");
        const li = document.createElement("li");
        list.appendChild(li).setAttribute("id", "score1");
        li.textContent =
          localStorage.getItem("name") + " " + ",Correct:" + score;
      });
    }
    countAdd();
  });
}
// changes the style of the css properties of the btsn once the start button is clicked  on
function visibility() {
  btn1.style.visibility = "inherit";
  btn2.style.visibility = "inherit";
  btn3.style.visibility = "inherit";
  btn4.style.visibility = "inherit";
  startbtn.style.visibility = "hidden";
}

startbtn.addEventListener("click", function () {
  btn1.textContent = questions[count].options[0];
  btn2.textContent = questions[count].options[1];
  btn3.textContent = questions[count].options[2];
  btn4.textContent = questions[count].options[3];
  document.getElementById("question-title").textContent =
    questions[count].question;

  timerId = setInterval(function () {
    time--;
    timer.textContent = time;
    if (time <= 0) {
      clearInterval(timerId);
    }
  }, 1000);
  visibility();
});
