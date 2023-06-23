// Make the computer select "Rock", "Paper" or "Scissors"
function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3) + 1
    console.log(randomNum);
    if (randomNum === 1) {
        return computerSelection = "rock" 
    } else if (randomNum === 2) {
        return computerSelection = "paper"
    } else {
        return computerSelection = "scissors"
    }
}



console.log(getComputerChoice())

// Allow player to choose "Rock", "Paper" or "Scissors" and make the choice case insensitive
    function getPlayerChoice() {
        let playerSelection = prompt(`Choose "rock", "paper" or "scissors"`)
        return playerSelection.toLowerCase()
    }

console.log(getPlayerChoice());
// Compare players choice against the computers
function playSingleRound(playerSelection, computerSelection) {
    
}
// Determine the winner
// Print out the result
// Reset the game