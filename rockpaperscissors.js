// Build a function to randomly assign rock, paper and scissors
function getComputerChoice() {
    computerchoice = ["Rock","Paper","Scissors"]
    return computerchoice[Math.floor(Math.random()*computerchoice.length)]
} 

// Build a function for playing rock paper scissors game
function playRound(playerSelection, computerselection) {
    playerSelection = playerSelection.toLowerCase()
    computerselection = computerselection.toLowerCase()
    winnercount = 0
    if (playerSelection == "rock" && computerselection == "paper") {
        gameoutcome = "You Lose! Paper beats Rock"
    } else if (playerSelection == "paper" && computerselection == "scissors") {
        gameoutcome = "You Lose! Scissors beats Paper"
    } else if (playerSelection == "scissors" && computerselection == "rock") {
        gameoutcome = "You Lose! Rock beats Scissors"
    } else if (playerSelection == computerselection) {
        gameoutcome = "That's a tie"
        winnercount = 2
    } else {
        gameoutcome = "Congrats, You Win!"
        winnercount = 1
    }
    return gameoutcome
}

// Build a function to repeat the game 5 rounds
function game() {
    playerwincount = 0
    computerwincount = 0

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Please enter your selection:")
        const computerselection = getComputerChoice()
        playRound(playerSelection,computerselection)
        if (winnercount == 1) {
            playerwincount += 1
        } else if (winnercount == 2) {    
        } else {
            computerwincount += 1
        }
     }

     if (playerwincount > computerwincount) {
        console.log("Congrats, You Win!")
     } else if (computerwincount > playerwincount) {
        console.log("Sorry, You Lose!")
     } else {
        console.log("That's a tie")
     }
}

game()