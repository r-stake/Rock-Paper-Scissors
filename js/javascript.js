// Make the computer select "Rock", "Paper" or "Scissors"
function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3) + 1
    console.log(randomNum);
    if (randomNum === 1) {
        return "rock" 
    } else if (randomNum === 2) {
        return "paper"
    } else {
        return "scissors"
    }
}

let computerSelection = getComputerChoice()
console.log(`Computer chose: ${computerSelection}`);


// Allow player to choose "Rock", "Paper" or "Scissors" and make the choice case insensitive

function getPlayerChoice() {
    let selectItem = prompt(`Choose "rock", "paper" or "scissors"`)
    return selectItem.toLowerCase()
}

let playerSelection = getPlayerChoice()
console.log(`Player chose: ${playerSelection}`);

// Compare players choice against the computers
function playSingleRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log(playerSelection === computerSelection);
        return winner = "It's a tie."
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return winner = "You Win! Rock beats Scissors."
        } else {
            return winner = "You Lose! Paper beats Rock"
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return winner = "You Win! Paper beats Rock"
        } else {
            return winner = "You Lose! Scissors beat Paper"
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return winner = "You Win! Scissors beat Paper"
        } else {
            return winner = "You Lose! Rock beats Scissors"
        }
    }
}

console.log(playSingleRound(playerSelection, computerSelection));
// Determine the winner
// Print out the result
// Reset the game