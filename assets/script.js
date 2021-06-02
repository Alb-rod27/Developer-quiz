let currQuestion = 0;
let question = [
  {
    question: 'What is the purpose of HTML?',
    choiceA: 'Styling',
    choiceB: 'functionality',
    choiceC: 'Structure',
    correctAnswer: 'C'
  },
  {
    question: 'What is the purpose of CSS?',
    choiceA: 'Emails',
    choiceB: 'Styling',
    choiceC: 'Structure',
    correctAnswer: 'B'
  },
  {
    question: 'In HTML what tag would you use to add the biggest type of section heading?',
    choiceA: '<h2>',
    choiceB: '<head>',
    choiceC: '<h1>',
    correctAnswer: 'C'
  },
  {
    question: 'What does HTML stand for?',
    choiceA: 'HyperText Markup Language',
    choiceB: 'Ham Tomato Mayo and Lettuce',
    choiceC: 'How To Mail Letters',
    correctAnswer: 'A'
  },
  {
    question: 'What is the purpose of Javascript?',
    choiceA: 'To make coffee',
    choiceB: 'functionality',
    choiceC: 'structure',
    correctAnswer: 'B'
  },
]

let timeLeft = 0;

let score = 0;

//start of quiz
function timer() {
  let timer = document.getElementById('timer')
  timeLeft = 50;
  let ticker = setInterval(function () {
     timer.innerHTML = timeLeft;
    if (timeLeft > 0) {
      timeLeft--;
    } else {
      clearInterval(ticker);
      $("#interface").html(`<h2>Time Up!</h2>`);
    }
  }, 1000)
}

function changeQuestion() {
  $("#interface").html(`<h2>${question[currQuestion].question}</h2>
  <button onclick="checkAnswer('A')">${question[currQuestion].choiceA}</button>
  <button onclick="checkAnswer('B')">${question[currQuestion].choiceB}</button>
  <button onclick="checkAnswer('C')">${question[currQuestion].choiceC}</button>`);
}

function checkAnswer(answer) {
  if (answer == question[currQuestion].correctAnswer) {
    // It's correct
  } else {
    if (timeLeft > 9) {
      timeLeft -= 10;
    } else {
      timeLeft == 0;
    }
  }

  if (currQuestion < question. length - 1) {
    currQuestion++;
    changeQuestion();
} else {
    saveScore();
    $("#interface").html(`<h2>End of Quiz</h2>
        <p>Your Score: ${timeLeft}</p>
        <p>Best Score: ${localStorage.getItem('currBest')}`);
}
}
function saveScore() {
if (localStorage.getItem('currBest') && localStorage.getItem('currBest') > timeLeft) {
    localStorage.setItem('currBest', timeLeft);
}
}

function setStage() {
timer();
currQuestion = 0;
changeQuestion();
}