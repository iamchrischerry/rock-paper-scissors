const options = ["rock", "paper", "scissors"]

function getComputerChoice() {
    let computerSelection = options[Math.floor(Math.random() * options.length)];
    return computerSelection;
}
//const computerChoice = getComputerChoice();


//let playerChoice = prompt("Choose your weapon...").toLowerCase();
//let playerChoice = weapon.charAt(0).toUpperCase() + weapon.slice(1);

//console.log(`Player chose ${playerChoice}`);
//console.log(`Computer chose ${computerChoice}`);

function checkWinner(a, b) {
    if (a == b) {
        return "tie";
    }
    else if ((a == "rock" && b == "scissors") ||
             (a == "scissors" && b == "paper") ||
             (a == "paper" && b == "rock")) {
        return "computer-wins";
    }
    else { 
        return "player-wins";
    }
}

function playRound(x, y){
    const result = checkWinner(x, y);{
        if (result == "tie"){
            return "It's a tie. Go again!";
        }
        else if (result == "player-wins"){
            return `${capitalize(y)} beats ${capitalize(x)}. You Win!`;
            
        }
        else if (result == "computer-wins"){
            return `${capitalize(x)} beats ${capitalize(y)}. You Lose!`;
        }
    } 
}

// console.log(playRound(computerChoice, playerChoice));

function game(){
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Choose your weapon...").toLowerCase();
        const computerChoice = getComputerChoice();
        console.log(`Player chose ${playerChoice}`);
        console.log(`Computer chose ${computerChoice}`);
        console.log(playRound(computerChoice, playerChoice));
        let p = 0;
        let c = 0;
        if(playerChoice == "rock") {
            playerScore = ++p;
        }
        else if(playRound() == "computer-wins") {
            computerScore = ++c
        }
        console.log(playerScore);
        console.log(computerScore);
    }
}
game();

// Helper function:

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}
