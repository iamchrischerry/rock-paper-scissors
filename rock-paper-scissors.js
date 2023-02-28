const options = ["rock", "paper", "scissors"]

function getComputerChoice() {
    let computerSelection = options[Math.floor(Math.random() * options.length)];
    return computerSelection;
}

function checkWinner(a, b) {
    if (a == b) {
        return "tie";
    }
    else if ((a == "rock" && b == "scissors") ||
             (a == "scissors" && b == "paper") ||
             (a == "paper" && b == "rock")) {
        return "computer-wins";
    }
    else if ((a == "rock" && b == "paper") ||
             (a == "scissors" && b == "rock") ||
             (a == "paper" && b == "scissors")) { 
        return "player-wins";
    }
    else return "typo"
}

function playRound(x, y){
    const result = checkWinner(x, y);
        if (result == "tie"){
            return "It's a tie. Go again!";
        }
        else if (result == "player-wins"){
            return `${capitalize(y)} beats ${capitalize(x)}. You Win!`;
            
        }
        else if (result == "computer-wins"){
            return `${capitalize(x)} beats ${capitalize(y)}. You Lose!`;
        } 
        else if (result == "typo"){
            return "Type properly fool."
        }
}

let computerScore = 0;
let playerScore = 0;

function countScore(p, q){
    const whoWon = checkWinner(p, q);
        if (whoWon == "computer-wins"){
           ++computerScore
        } 
        else if (whoWon == "player-wins"){
           ++playerScore
        }
}

function game(){
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Choose your weapon...").toLowerCase();
        const computerChoice = getComputerChoice();
        console.log(`Player chose ${playerChoice}`);
        console.log(`Computer chose ${computerChoice}`);
        console.log(playRound(computerChoice, playerChoice));
        countScore(computerChoice, playerChoice);
        console.log(computerScore);
        console.log(playerScore);
    } 
    if (computerScore > playerScore) {
        console.log(`Computer won ${computerScore} rounds and you won ${playerScore}! You lose!`);
    }
    else if (playerScore > computerScore) {
        console.log(`You won ${playerScore} rounds and computer won ${computerScore}! You win!`);
    }
    else if (computerScore == playerScore) {
        console.log("It's a tie! Try again.")
    }
}
game();

// Helper function:

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}
