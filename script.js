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


console.log(getComputerChoice());
// getHumanChoice();