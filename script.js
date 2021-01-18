

var countDownEl = document.querySelector("#countdown");
var questionContainerEl = document.querySelector(".question-container");
var questionSpanEl = document.querySelector("#question-span");
var scoreEl = document.querySelector("#count");
var startEl = document.querySelector("#start");

var answerArea = document.querySelector("#answer-placeholder");

var endGameArea = document.querySelector("#endgame-placeholder");


var score = 0;
var timeLeft = 40;
var currentQuestionindex = 0;

var questions = [
    { q: "What does DOM stand for?", a: "Document Object Model", b: "Discord Object Material", c: "Dominic", d: "Distribute On Monday"},
    { q: "What does API stand for?", a: "All People Interact", b: "Apple Pies Inside", c: "Application Programming Interface", d: "Application Programming Intellegence" },
    { q: "What is a HTML element?", a: "h1", b: "HTML", c: "body", d: "all of the above"},
]

function countDown(amount){
    if ( amount > 1 ) {
        timeLeft =  timeLeft - amount;
    } else{
        timeLeft--;
    }
    countDownEl.textContent = timeLeft
}

function printQuestion(questionObj){
    questions.textContent = "";
    questions.textContent = questionObj.q;


    questionContainerEl.textContent = "";

    for (answer in questionObj){
        if (answer !== "q"){
           var answerBtn = document.createElement('button');
            answerBtn.setAttribute('id', 'answer-id');
            answerBtn.setAttribute('class', 'btn');
            answerBtn.textContent = questionObj[answer]; 
       
   
    answerBtn.onclick = function() {
        
        if (
                answerBtn.textContent === "Document Object Model" ||
                answerBtn.textContent === "Application Programming Interface" ||
                answerBtn.textContent === "all of the above" 
                
        ){
            
            
        }

        score++;
            
            currentQuestionindex++;
            
            answerArea.textContent = "CORRECT!";
            

        

       