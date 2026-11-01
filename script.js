
console.log("Hello World");

// STEP 1: Get the computer's choice
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

// STEP 2: Get the human's choice
function getHumanChoice() {
    let humanChoice = prompt("Choose rock, paper or scissors:");

    return humanChoice;
}

// STEP 3: Play the entire game
function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    // Play one round
    function playRound(humanChoice, computerChoice) {

        // Check if the player clicked Cancel
        if (humanChoice === null) {
            console.log("You cancelled the game!");
            return false;
        }

        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        }

        else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        }

        else {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        }

        console.log(`Your score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);

        return true;
    }

    // Play 5 rounds
    for (let i = 0; i < 5; i++) {

        const humanSelection = getHumanChoice();

        // Stop the game if the player clicks Cancel
        if (humanSelection === null) {
            console.log("Game stopped!");
            break;
        }

        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    // Announce the final winner
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    }

    else if (computerScore > humanScore) {
        console.log("The computer won the game!");
    }

    else {
        console.log("The game ended in a tie!");
    }
}

// STEP 4: Start the game
playGame();
