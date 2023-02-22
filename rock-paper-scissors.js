const options = ["rock", "paper", "scissors"]

function getComputerChoice() {
    let computerChoice = options[Math.floor(Math.random() * options.length)];
    console.log(computerChoice);
    return computerChoice;
}
const playerChoice = prompt ("Choose your weapon.")
console.log(playerChoice);

function checkWinner(computerChoice, playerChoice) {
    if (playerChoice == computerChoice) {
        return "Tie";
    }
    else {
        return "No Tie"
    }
}

function playRound(playerChoice, computerChoice){
    const result = checkWinner(playerChoice, computerChoice);{
        if (result == "Tie"){
            return "It's a Tie!"
        }
        else{
            return "No Tie!"
        }
    }
}
const computerChoice = getComputerChoice();
console.log(playRound(playerChoice,computerChoice));

