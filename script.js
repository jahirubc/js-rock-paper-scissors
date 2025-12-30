function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
function getHumanChoice() {
    const humanChoice = prompt("Enter rock, paper, or scissors:");
    return humanChoice;
}
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    // make human choice case-insensitive
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return;
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

// play 5 rounds
for (let i = 1; i <= 5; i++) {
    console.log(`--- Round ${i} ---`);
    playRound(getHumanChoice(), getComputerChoice());
}

// declare final winner
console.log("Final Score:");
console.log(`Human: ${humanScore} | Computer: ${computerScore}`);

if (humanScore > computerScore) {
    console.log("You won the game!");
} else if (computerScore > humanScore) {
    console.log("💻 Computer won the game!");
} else {
    console.log("The game is a tie!");
}


