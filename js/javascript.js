// Make the computer select "Rock", "Paper" or "Scissors"
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

// Allow player to choose "Rock", "Paper" or "Scissors" and make the choice case insensitive

function getPlayerChoice() {
    let choiceSelected = 0
    let selectItem = prompt(`Choose "rock", "paper" or "scissors"`)
    while (choiceSelected === 0) {
        if (selectItem === "rock" || selectItem === "paper" || selectItem === "scissors") {
            choiceSelected = 1
            return selectItem.toLowerCase()
        }
        else {
            selectItem = prompt(`Invalid choice: choose "rock", "paper" or "scissors"`)
        }
    }
}

// Compare players choice against the computers and determine the winner
function playSingleRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
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

// Print out the result
// Play 5 rounds
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
// Reset the game