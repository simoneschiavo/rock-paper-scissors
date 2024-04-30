// Get the computer choice
function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice;

    if (randomNum === 0) {
        computerChoice = 'rock';
    } else if (randomNum === 1) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    };

    return computerChoice;
};

// Get the human choice
function getHumanChoice() {
    let humanChoice = prompt("What do you choose? (Rock, paper, or Scissors)", "");
    
    return humanChoice.toLowerCase();
}

// Track Score
let computerScore = 0;
let humanScore = 0;

// Add computer and human score to the UI
const container = document.querySelector(".container");
const humanScoreCont = document.querySelector(".humanScoreCont");
const computerScoreCont = document.querySelector(".computerScoreCont");
const humanScoreBlock = document.querySelector(".humanScore");
const computerScoreBlock = document.querySelector(".computerScore");

humanScoreBlock.textContent = `${humanScore}`;
computerScoreBlock.textContent = `${computerScore}`;

const computerWon = document.createElement("span");
const humanWon = document.createElement("span");

computerWon.textContent = " Computer won this game!";
humanWon.textContent = " You won this game!";

const resultsList = document.querySelector(".container > ul");
const resultItem = document.createElement("li");

// Function to check for winners
function checkWinner() {
    if (humanScore === 5) {
        humanScoreCont.appendChild(humanWon);
        disablePlayButtons();
        container.appendChild(newGameButton);
    };

    if (computerScore === 5) {
        computerScoreCont.appendChild(computerWon);
        disablePlayButtons();
        container.appendChild(newGameButton);
    }; 
}

// Play one round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        resultItem.textContent = `No winners, you both selected ${humanChoice}`;
        resultsList.appendChild(resultItem);
        return;
    }

    if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultItem.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
        humanScore++;
        humanScoreBlock.textContent = `${humanScore}`;
        resultsList.appendChild(resultItem);
        checkWinner();
        return;
    }

    resultItem.textContent = `You lost! ${humanChoice} loses against ${computerChoice}!`;
    computerScore++;
    computerScoreBlock.textContent = `${computerScore}`;
    resultsList.appendChild(resultItem);
    checkWinner();
    return;
}

const playButtons = document.querySelectorAll("button");

playButtons.forEach((playButton) => {
    playButton.addEventListener("click", function (e) {
        const humanChoice = e.target.className;
        playRound(humanChoice, getComputerChoice());
    });
});

// Disable playButtons
function disablePlayButtons() {
    playButtons.forEach((playButton) => {
      playButton.disabled = true;
    });
}

// Enable playButtons
function enablePlayButtons() {
    playButtons.forEach((playButton) => {
        playButton.disabled = false;
    })
}

// Play new game
const newGameButton = document.createElement("button");
newGameButton.textContent = "Play another round";

function playNewGame() {
    newGameButton.remove();
    enablePlayButtons();
    humanScore > computerScore ? humanWon.remove() : computerWon.remove();
    resultItem.remove();
    humanScore = 0;
    humanScoreBlock.textContent = `${humanScore}`;
    computerScore = 0;
    computerScoreBlock.textContent = `${computerScore}`;
}

newGameButton.addEventListener("click", playNewGame);