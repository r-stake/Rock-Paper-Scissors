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
    let correctInput = 0
    let getUserInput = prompt(`Choose "rock", "paper" or "scissors"`)
    while (correctInput === 0) {
        if (getUserInput === "rock" || getUserInput === "paper" || getUserInput === "scissors") {
            correctInput = 1
            return getUserInput.toLowerCase()
        }
        else {
            getUserInput = prompt(`Invalid choice: choose "rock", "paper" or "scissors"`)
        }
    }
}

// A single round of the game. Compare players choice against the computers and return the winner
function playSingleRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's a tie.\n\n")
        return "tie"
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
             console.log("You Win this round! Rock beats Scissors\n\n")
            return "playerWins"
        } else {
            console.log("You Lose this round! Paper beats Rock\n\n")
            return "playerLoses"
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            console.log("You Win this round! Paper beats Rock\n\n") 
            return "playerWins"
        } else {
            console.log("You Lose this round! Scissors beat Paper\n\n")
            return "playerLoses"
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            console.log("You Win this round! Scissors beat Paper\n\n")
            return "playerWins"
        } else {
            console.log("You Lose this round! Rock beats Scissors\n\n")
            return "playerLoses"
        }
    }
}

// Play 5 rounds of "Rock, paper, scissors"
function game() {
    let playerWinCount = 0
    let computerWinCount = 0
    let winner = 0
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}:`);
        let computerSelection = getComputerChoice()
        console.log(`Computer chose: ${computerSelection}`);

        let playerSelection = getPlayerChoice()
        console.log(`Player chose: ${playerSelection}`);

        winner = playSingleRound(playerSelection, computerSelection);

        if (winner === "playerWins") {
            playerWinCount += 1
        } else if (winner === "playerLoses") {
            computerWinCount += 1
        }
    }

    if (playerWinCount > computerWinCount) {
        console.log("You won the game!");
    } else if (playerWinCount < computerWinCount) {
        console.log("You lost the game!");
    } else if (playerWinCount === computerWinCount) {
        console.log("It's a tie!");
    }
}

game()
