
var questionsEl = document.querySelector("#questions");
var timerEl = document.querySelector("#time");
var startBtn = document.querySelector("#start");


var timerId;



function clockTick() {
  
  time--;
  timerEl.textContent = time;

  if (time <= 0) {
    quizEnd();
  }
}


submitBtn.onclick = saveHighscore;

startBtn.onclick = startQuiz;
