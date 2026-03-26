console.log("Hello World")

let humanScore = 0
let computerScore = 0
// write a function that randomly returns either "rock", "paper", or "scissors"
function getComputerChoice(){
    let randomNum = Math.random()
    if (randomNum < 0.33) {
        return "rock"
    } else if (randomNum < 0.66) {
        return "paper"
    } else {
        return "scissors"
    }
}

// write logic that takes the user choice
function getUserChoice() {
    let userChoice = prompt("Please enter rock, paper, or scissors:")
    return userChoice
}

// play round function
function playRound(userChoice, computerChoice) {
    if(userChoice == "rock" && computerChoice == "scissors") {
        humanScore++
        return "You win! Rock beats scissors."
    } else if (userChoice == "paper" && computerChoice == "rock") {
        humanScore++
        return "You win! Paper beats rock."
    } else if (userChoice == "scissors" && computerChoice == "paper") {
        humanScore++
        return "You win! Scissors beats paper."
    } else if (userChoice == computerChoice) {
        return "It's a tie!"
    } else {
        computerScore++
        return `You lose! ${computerChoice} beats ${userChoice}.`
    }
}

for (let i = 0; i < 5; i++) {
    console.log(playRound(getUserChoice().toLowerCase(), getComputerChoice()));
    console.log(`Human: ${humanScore} | Computer: ${computerScore}`);
}
