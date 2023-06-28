
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


function playRound(player, comp) {
    if (player == "Rock" || player == "rock" || player == "ROCK") {
        if (comp == "Rock") {
            ties += 1;
            return "Tie game! Rock vs Rock.";
        }
        if (comp == "Paper") {
            losses += 1;
            return "You lose, Paper beats Rock.";
        }
        if (comp == "Scissors") {
            wins += 1;
            return "You win, Rock beats Scissors.";
        }
    }
    if (player == "Paper" || player == "paper" || player == "PAPER") {
        if (comp == "Paper") {
            ties += 1;
            return "Tie game! Paper vs Paper.";
        }
        if (comp == "Rock") {
            wins += 1;
            return "You win, Paper beats Rock.";
        }
        if (comp == "Scissors") {
            losses += 1;
            return "You lose, Scissors beats Paper.";
        }
    }
    if (player == "Scissors" || player == "scissors" || player == "SCISSORS") {
        if (comp == "Scissors") {
            ties += 1;
            return "Tie game! Scissors vs Scissors.";
        }
        if (comp == "Rock") {
            losses += 1;
            return "You lose, Rock beats Scissors.";
        }
        if (comp == "Paper") {
            wins += 1;
            return "You win, Scissors beats Paper.";
        }
    }
}


function game() {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}