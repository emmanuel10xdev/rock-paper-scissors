function getComputerChoice() {
    let randomNumber = Math.random();

    if (randomNumber < 1 / 3) {
        return "rock";
    } else if (randomNumber < 2 / 3) {
        return "paper";
    } else return "scissors";
}

function getHumanChoice() {
    let humanChoice = prompt("Choose rock, paper, or scissors:");

    return humanChoice.toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}


const humanSelection1 = getHumanChoice();
const computerSelection1 = getComputerChoice();

playRound(humanSelection1, computerSelection1);

const humanSelection2 = getHumanChoice();
const computerSelection2 = getComputerChoice();

playRound(humanSelection2, computerSelection2);

const humanSelection3 = getHumanChoice();
const computerSelection3 = getComputerChoice();

playRound(humanSelection3, computerSelection3);

const humanSelection4 = getHumanChoice();
const computerSelection4 = getComputerChoice();

playRound(humanSelection4, computerSelection4);

const humanSelection5 = getHumanChoice();
const computerSelection5 = getComputerChoice();

playRound(humanSelection5, computerSelection5);

if (humanScore > computerScore) {
    console.log("You won the game!");
} else if (computerScore > humanScore) {
    console.log("You lost the game!");
} else {
    console.log("The game ended in a tie!");
}
}

playGame();