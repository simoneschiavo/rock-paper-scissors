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
    console.log(humanChoice.toLowerCase());
    return humanChoice.toLowerCase();
}

// Track Score
let computerScore = 0;
let humanScore = 0;

// Play one round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`No winners, you both selected ${humanChoice}`);
        return;
    }

    if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
        return;
    }

    console.log(`You lost! ${humanChoice} loses against ${computerChoice}!`);
    computerScore++;
    return;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log(humanScore);
console.log(computerScore);