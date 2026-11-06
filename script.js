
function getComputerChoice() {
    let randomNumber = Math.random();

    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

let humanScore = 0;
let computerScore = 0;

const results = document.querySelector("#results");

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

function playRound(humanChoice) {

    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        results.textContent = `It's a tie! Both chose ${humanChoice}.`;
    }

    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        results.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    }

    else {
        computerScore++;
        results.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
    }

    results.textContent += ` Player: ${humanScore} | Computer: ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {

        if (humanScore === 5) {
            results.textContent += " Congratulations! You won the game!";
        } else {
            results.textContent += " The computer won the game!";
        }

        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
}

rockButton.addEventListener("click", () => {
    playRound("rock");
});

paperButton.addEventListener("click", () => {
    playRound("paper");
});

scissorsButton.addEventListener("click", () => {
    playRound("scissors");
});
