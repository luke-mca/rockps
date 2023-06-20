
function getComputerChoice() {
    let num = Math.floor(Math.random()*3);
    if (num == 0) {
        return "Rock";
    }
    if (num == 1) {
        return "Paper";
    }
    if (num == 2) {
        return "Scissors";
    }
}

function getPlayerChoice() {
    let playerSelection = prompt("Rock, Paper, or Scissors? ");
    return playerSelection;
}

function playRound(player, comp) {
    if (player == "Rock" || player == "rock" || player == "ROCK") {
        if (comp == "Rock") {
            return "Tie game! Rock vs Rock.";
        }
        if (comp == "Paper") {
            return "You lose, Paper beats Rock.";
        }
        if (comp == "Scissors") {
            return "You win, Rock beats Scissors.";
        }
    }
    if (player == "Paper" || player == "paper" || player == "PAPER") {
        if (comp == "Paper") {
            return "Tie game! Paper vs Paper.";
        }
        if (comp == "Rock") {
            return "You win, Paper beats Rock.";
        }
        if (comp == "Scissors") {
            return "You lose, Scissors beats Paper.";
        }
    }
    if (player == "Scissors" || player == "scissors" || player == "SCISSORS") {
        if (comp == "Scissors") {
            return "Tie game! Scissors vs Scissors.";
        }
        if (comp == "Rock") {
            return "You lose, Rock beats Scissors.";
        }
        if (comp == "Paper") {
            return "You win, Scissors beats Paper.";
        }
    }
}


function game() {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}

for (let i = 0; i<5; i++) {
    game();
}