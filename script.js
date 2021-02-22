
var questionsEl = document.querySelector("#questions");
var timerEl = document.querySelector("#time");
var startBtn = document.querySelector("#start");


var timerId;
var timeLeft = 60;
var currentQuestionIndex = 0; 

var questions = [
  { q: "What is the purpose of HTML?", a: "styling", b: "functionality", c: "structure", d: "none of these"},
  { q: "What is the purpose of CSS?", a: "structure", b: "styling", c: "emailing", d: "phone calls"},
  { q: "In HTML what tag would you use to add the biggest type of section heading?", a: "<h2>", b: "<h3>", c: "<h1>", d: "<head>"},
  { q: "What does HTML stand for?", a: "Ham Tomato Mayo and Lettuce", b: "HyperText Markup Language", c: "How To Mail Letters", d: "Hate To Make Lemonade"},
  { q: "What is the purpose of Javascript?", a: "To make coffee", b: "functionality", c: "to make a movie", d: "structure"}
]


function startQuiz() {

  var startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "hide");

  questionsEl.removeAttribute("class");

  timerEl.textContent = time;
}

function countDown() {
  
  time--;
  timerEl.textContent = time;

  if (time <= 0) {
    quizEnd();
  }
}


submitBtn.onclick = saveHighscore;

startBtn.onclick = startQuiz;
