
var questionContainerEl = document.querySelector("#questions");
var countDownEl = document.querySelector("countdown");
var timerEl = document.querySelector("#time");
var startQuiz = document.querySelector("#start");

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

function countDown(amount) {
  if ( amount > 1 ) {
    timeLeft =  timeLeft - amount;
} else {
    timeLeft--;
}

countDownEl.textContent = timeLeft
}

//  startQuiz(); {

//   var startScreenEl = document.getElementById("start-screen");
//   startScreenEl.setAttribute("class", "hide");

//   questionsEl.removeAttribute("class");
//   timerId = setInterval(1000);
//   timerEl.textContent = time;
// }

function printQuestion(questionObj) {
  questionSpanEl.textContent = '';
  questionSpanEl.textContent =questionObj.q;
  questionContainerEl.textContent = '';

  for (answer in questionObj) {
    if (answer !== 'q') {
      var answerBtn = document.createElement('button');
        answerBtn.setAttribute('id', 'answer-id');
        answerBtn.setAttribute('class', 'btn'); 
        answerBtn.textContent = questionObj[answer];
//----------------
        answerBtn.onclick = function() {
          if (
            answerBtn.textContent === "structure" ||
            answerBtn.textContent === "styling" ||
            answerBtn.textContent === "<h1>" ||
            answerBtn.textContent === "HyperText Markup Language" ||
            answerBtn.textContent === "functionality"
            
            ) {
              score++;
              currentQuestionIndex++;

              setTimeout(function(){ 
                answerArea.textContent = "";
                
                if(currentQuestionindex === 5){
                    endGame(score);
                } else {
                    printQuestion(questions[currentQuestionindex]);
                }
                

                }, 1000);

            } else {
              currentQuestionIndex++;
              answerArea.textContent = "Incorrect!";

              countDown(10);
              setTimeout(function(){
                answerArea.textContent = "";
                if(currentQuestionIndex == 5){
                  endGame(score);
                } else {
                  printQuestion(questions[currentQuestionIndex]);
                }
              }, 2000);
            }

        };
        questionContainerEl.appendChild(answerBtn);
    }
  }
}

// startQuiz.addEventListener('click', function() {
//   var countDownTimerID = setInterval(function() {
    
//       if (timeLeft > 0) {
//         countDown(amount);
//       } else {
//           endGame(score, '', 'end game');
//           clearInterval(countDownTimerID);
//       }
//     }, 1000);
    
//     printQuestion(questions[currentQuestionindex]);
//   });
  
//   startBtn.onclick = startQuiz;

  