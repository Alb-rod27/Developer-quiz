const highScores = JSON.parse(localStorage.getItem('player-score'));
const backBtn = document.getElementById('go-back');
const ClearBtn = document.getElementById('clear-scores');
const scoreList = document.getElementById('highscore-list');

// variables
let playerScore = JSON.parse(localStorage.getItem('player-score'));
let playerInitials = localStorage.getItem('player-initials');

const playerArr = playerScore + ' ' + playerInitials;

function newPlayer() {
    let toPost = {
        initials: playerInitials,
        score: highScores
    }
    window.load.localStorage.setItem('players', toPost);
}


// show high score on page 
scoreList.innerHTML = playerArr;

// clears score 
function clearScore() {
    scoreList.innerHTML = '';
}

// go back button to return to index
function returnHome() {
    let yesOrNo = window.confirm('Are you sure you want to go back and retake the quiz?');
    if (yesOrNo === true) {
        window.location.href = "./index.html";
    }
};

// event listener
backBtn.addEventListener('click', returnHome);

ClearBtn.addEventListener('click', clearScore);