// Randomly return "rock", "paper" or "scissors" for the computers play
function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3) + 1
    if (randomNum === 1) {
        return "rock" 
    } else if (randomNum === 2) {
        return "paper"
    } else {
        return "scissors"
    }
}

// Play a single round of the game. Compare players choice against the computers and return the winner
function playSingleRound(playerSelection, computerSelection) {
    const para = document.createElement("p");
    if (playerSelection === computerSelection) {
        para.textContent = "It's a tie.";
        displayResults.appendChild(para);
        return roundOutcome = "tie"
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            para.textContent = "You Win this round! Rock beats Scissors.";
            displayResults.appendChild(para);
            playerWinCount += 1;
        } else {
            para.textContent = "You Lose this round! Paper beats Rock.";
            displayResults.appendChild(para);
            computerWinCount += 1;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            para.textContent = "You Win this round! Paper beats Rock.";
            displayResults.appendChild(para);
            playerWinCount += 1;
        } else {
            para.textContent = "You Lose this round! Scissors beat Paper.";
            displayResults.appendChild(para);
            computerWinCount += 1;
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            para.textContent = "You Win this round! Scissors beat Paper.";
            displayResults.appendChild(para);
            playerWinCount += 1;
        } else {
            para.textContent = "You Lose this round! Rock beats Scissors.";
            displayResults.appendChild(para);
            computerWinCount += 1;
        }
    }
}

const buttons = document.querySelectorAll("button");

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

const displayResults = document.querySelector(".display-results");
const para = document.createElement("p");
const score = document.querySelector(".score");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");

let roundOutcome = "";
let playerWinCount = 0;
let computerWinCount = 0;
let pressedButtonId = 0;


buttons.forEach(button => {
    button.addEventListener("click", () => {
        pressedButtonId = button.id;
    })
})

const clickHandler = () => {
    let playerSelection = pressedButtonId;
    let computerSelection = getComputerChoice();
    console.log(`Computer chose: ${computerSelection}`);
    playSingleRound(playerSelection, computerSelection);
    updateScore();
}

// Update score
function updateScore() {
    isGameFinished()
    playerScore.textContent = `${playerWinCount}`;
    computerScore.textContent = `${computerWinCount}`;
    if (playerWinCount === 5) {
        para.textContent = "You won the game!"
        score.appendChild(para);
    } else if (computerWinCount === 5 ) {
        para.textContent = "You lost the game!"
        score.appendChild(para);
    }
}

function isGameFinished() {
    if (playerWinCount === 5 || computerWinCount === 5) {
        btnRock.removeEventListener("click", clickHandler);
        btnPaper.removeEventListener("click", clickHandler);
        btnScissors.removeEventListener("click", clickHandler);
    }
}

btnRock.addEventListener("click", clickHandler);

btnPaper.addEventListener("click", clickHandler);

btnScissors.addEventListener("click", clickHandler);