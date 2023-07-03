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

// Ask the player to choose "rock", "paper" or "scissors"
function getPlayerChoice() {
    // let correctInput = 0
    // let getUserInput = prompt(`Choose "rock", "paper" or "scissors"`)
    // while (correctInput === 0) {
    //     if (getUserInput === "rock" || getUserInput === "paper" || getUserInput === "scissors") {
    //         correctInput = 1
    //         return getUserInput.toLowerCase()
    //     }
    //     else {
    //         getUserInput = prompt(`Invalid choice: choose "rock", "paper" or "scissors"`)
    //     }
    // }
}

// A single round of the game. Compare players choice against the computers and return the winner
function playSingleRound(playerSelection, computerSelection) {
    const displayResults = document.querySelector(".display-results");
    const para = document.createElement("p");
    if (playerSelection === computerSelection) {
        para.textContent = "It's a tie.";
        displayResults.appendChild(para);
        return "tie"
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            para.textContent = "You Win this round! Rock beats Scissors.";
            displayResults.appendChild(para);
            return "playerWins"
        } else {
            para.textContent = "You Lose this round! Paper beats Rock.";
            displayResults.appendChild(para);
            return "playerLoses"
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            para.textContent = "You Win this round! Paper beats Rock.";
            displayResults.appendChild(para);
            return "playerWins"
        } else {
            para.textContent = "You Lose this round! Scissors beat Paper.";
            displayResults.appendChild(para);
            return "playerLoses"
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            para.textContent = "You Win this round! Scissors beat Paper.";
            displayResults.appendChild(para);
            return "playerWins"
        } else {
            para.textContent = "You Lose this round! Rock beats Scissors.";
            displayResults.appendChild(para);
            return "playerLoses"
        }
    }
}

// Play 5 rounds of "Rock, paper, scissors"
// function game() {
//     let playerWinCount = 0
//     let computerWinCount = 0
//     let winner = 0
//     for (let i = 0; i < 5; i++) {
//         console.log(`Round ${i + 1}:`);
        
//         let computerSelection = getComputerChoice()
//         console.log(`Computer chose: ${computerSelection}`);

//         let playerSelection = getPlayerChoice()
//         console.log(`Player chose: ${playerSelection}`);

//         winner = playSingleRound(playerSelection, computerSelection);

//         if (winner === "playerWins") {
//             playerWinCount += 1
//         } else if (winner === "playerLoses") {
//             computerWinCount += 1
//         }
//     }

//     if (playerWinCount > computerWinCount) {
//         console.log("You won the game!");
//     } else if (playerWinCount < computerWinCount) {
//         console.log("You lost the game!");
//     } else if (playerWinCount === computerWinCount) {
//         console.log("It's a tie!");
//     }
// }

// game()

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");


btnRock.addEventListener("click", () => {
    let playerSelection = "rock";
    let computerSelection = getComputerChoice();
    playSingleRound(playerSelection, computerSelection);
});

btnPaper.addEventListener("click", () => {
    let playerSelection = "paper";
    let computerSelection = getComputerChoice();
    playSingleRound(playerSelection, computerSelection);
});

btnScissors.addEventListener("click", () => {
    let playerSelection = "scissors";
    let computerSelection = getComputerChoice();
    playSingleRound(playerSelection, computerSelection);
});