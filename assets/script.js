let score = 0;
let shuffledQuestions, currentQuestionsIndex;
let playerScore = document.querySelector('#final-score');
let playerInitials = document.querySelector('#final-initials');
let seconds = 60;
let answerPicked = false
let name = document.getElementById('name')
let playerInfo = [];

/////////////////////////////////
const scoreBtn = document.getElementById('correct-answers');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const scoreBox = document.getElementById('score-box');
const timerBox = document.getElementById('timer-box');
const scoreHolder = document.getElementById('score-holder');
const timer = document.getElementById('timer');

const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const finishButton = document.getElementById('finish-btn');
const answerButtonsElement = document.getElementById('answer-buttons');
const submitBtn = document.getElementById('submit-btn');

function startGame() {
  countDown();
    startButton.classList.add('hide');
    nextButton.classList.remove('hide');
    questionContainerElement.classList.remove('hide');
    scoreBtn.classList.remove('hide');
    scoreHolder.classList.remove('hide');
    timer.classList.remove('hide');
    currentQuestionsIndex = 0;
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    setNextQuestion()
};

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionsIndex]);
};

function showQuestion(question) {
  answerPicked = false
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerText = answer.text;
      button.classList.add('btn');
      if (answer.correct) {
          button.dataset.correct = answer.correct
      };
      button.addEventListener('click', selectAnswer);
      answerButtonsElement.appendChild(button);
  });
};

function resetState() {
  nextButton.classList.add('hide');
  while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  };
};

function countDown() {
  let timeInterval = setInterval(function () {
      let counter = document.getElementById('time-left');
      counter.innerHTML = 'Timer: ' + seconds;
      if (seconds > 1) {
          // Set the `textContent` of `counter` to show the remaining seconds
          counter.textContent = 'Timer: ' + seconds;
          seconds--;
      } else {
          timer.innerHTML = '';
          // Use `clearInterval()` to stop the timer
          clearInterval(timeInterval);
          // Call the `displayMessage()` function
          finishGame();
      }
      if (seconds == 0) {
          finishGame();
      }
  }, 1000);
};

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;

  Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
  });
  if (shuffledQuestions.length > currentQuestionsIndex + 1) {
      nextButton.classList.remove('hide');
  } else {
      nextButton.classList.add('hide');
      finishButton.classList.remove('hide');
  };
  if (answerPicked === false) {
      if (selectedButton.dataset = correct) {
          score += 7
      } else {
          seconds -= 5;
      }
      answerPicked = true
  }
  document.getElementById('correct-answers').innerHTML = "Score: " + score;
};

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
      element.classList.add('correct');
  } else {
      element.classList.add('wrong');
  };
};

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
};

function finishGame() {
  document.getElementById('finish-hide').classList.add('hide');
  document.getElementById('finish-show').classList.remove('hide');
  document.getElementById('container').classList.add('center-highscore');
  document.getElementById('timer').classList.add('hide');
  document.getElementById('timer').classList.add('hide');
};