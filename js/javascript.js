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

console.log(getComputerChoice())

// Allow player to choose "Rock", "Paper" or "Scissors"
// Compare players choice against the computers
// Determine the winner
// Print out the result
// Reset the game