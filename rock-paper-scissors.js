const options = ["rock", "paper", "scissors"]

function getComputerChoice() {
    let computerChoice = options[Math.floor(Math.random() * options.length)];
    console.log(computerChoice);
    return computerChoice;
}
const computerChoice = getComputerChoice();


const playerChoice =  prompt("Choose your weapon...")
console.log(playerChoice);

function checkWinner(computerChoice, playerChoice) {
    if (playerChoice == computerChoice) {
        return "tie";
    }
    else if ((playerChoice == "rock" && computerChoice == "scissors") ||
             (playerChoice == "scissors" && computerChoice == "paper") ||
             (playerChoice == "paper" && computerChoice == "rock")) {
        return "player-wins";
    }
    else { 
        return "computer-wins";
    }
}

function playRound(playerChoice, computerChoice){
    const result = checkWinner(computerChoice, playerChoice);{
        if (result == "tie"){
            console.log("It's a tie. Go again!")
        }
        else if (result == "player-wins"){
            console.log(`${playerChoice} beats ${computerChoice}. You Win!`)
        }
        else {
            console.log(`${computerChoice} beats ${playerChoice}. You Lose!`)
        }
    }
}

console.log(playRound(playerChoice,computerChoice));

