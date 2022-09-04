// Build a function to randomly assign rock, paper and scissors
function getComputerChoice() {
    computerchoice = ["Rock","Paper","Scissors"]
    return computerchoice[Math.floor(Math.random()*computerchoice.length)]
} 

// Build a function for playing rock paper scissors game
function playRound(playerSelection, computerselection) {
    playerSelection = playerSelection.toLowerCase()
    computerselection = computerselection.toLowerCase()

    if (playerSelection == "rock" && computerselection == "paper") {
        gameoutcome = "You Lose! Paper beats Rock"
    } else if (playerSelection == "paper" && computerselection == "scissors") {
        gameoutcome = "You Lose! Scissors beats Paper"
    } else if (playerSelection == "scissors" && computerselection == "rock") {
        gameoutcome = "You Lose! Rock beats Scissors"
    } else if (playerSelection == computerselection) {
        gameoutcome = "That's a tie"
    } else {
        gameoutcome = "Congrats, You Win!"
    }
    return gameoutcome
}

// Build a function to repeat the game 5 rounds
function game() {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection,computerselection)
     }
}
const playerSelection = "rock"
const computerselection = getComputerChoice()

console.log(playRound(playerSelection,computerselection))