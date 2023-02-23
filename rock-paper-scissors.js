const options = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    let computerChoice = options[Math.floor(Math.random() * options.length)];
    return computerChoice;
}
const computerChoice = getComputerChoice();


let weapon = prompt("Choose your weapon...").toLowerCase();
let playerChoice = weapon.charAt(0).toUpperCase() + weapon.slice(1);

console.log(`Player chose ${playerChoice}`);
console.log(`Computer chose ${computerChoice}`);

function checkWinner(computerChoice, playerChoice) {
    if (playerChoice == computerChoice) {
        return "tie";
    }
    else if ((playerChoice == "Rock" && computerChoice == "Scissors") ||
             (playerChoice == "Scissors" && computerChoice == "Paper") ||
             (playerChoice == "Paper" && computerChoice == "Rock")) {
        return "player-wins";
    }
    else { 
        return "computer-wins";
    }
}

function playRound(computerChoice, playerChoice){
    const result = checkWinner(computerChoice, playerChoice);{
        if (result == "tie"){
            console.log("It's a tie. Go again!")
        }
        else if (result == "player-wins"){
            console.log(`${playerChoice} beats ${computerChoice}. You Win!`)
        }
        else if (result == "computer-wins"){
            console.log(`${computerChoice} beats ${playerChoice}. You Lose!`)
        }
    }
}

console.log(playRound(computerChoice, playerChoice));

