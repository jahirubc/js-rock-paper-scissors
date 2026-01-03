let humanScore = 0;
let computerScore = 0;

const resultsDiv = document.querySelector("#results");
const scoreDiv = document.querySelector("#score");
const winnerDiv = document.querySelector("#winner");
const buttons = document.querySelectorAll("button");

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


function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        resultsDiv.textContent = `Tie! Both chose ${humanChoice}`;
        return;
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        resultsDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else {
        resultsDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }

    updateScore();
    checkWinner();
}

// play 5 rounds
// for (let i = 1; i <= 5; i++) {
//     console.log(`--- Round ${i} ---`);
//     playRound(getHumanChoice(), getComputerChoice());
// }

// declare final winner

function updateScore() {
    scoreDiv.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
}

function checkWinner() {
    if (humanScore === 5) {
        winnerDiv.textContent = "You won the game!";
        disableButtons();
    } else if (computerScore === 5) {
        winnerDiv.textContent = "Computer won the game!";
        disableButtons();
    }
}

function disableButtons() {
    buttons.forEach(button => button.disabled = true);
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        playRound(button.dataset.choice);
    });
});