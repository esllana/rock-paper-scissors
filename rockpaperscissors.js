// Function to get a random computer choice
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to get user input and make it case-insensitive
function getUserChoice() {
  let userInput = prompt("Let's play a game of Rock, Paper, Scissors! Type what you are going to play with:");
  userInput = userInput.toLowerCase();
  return userInput;
}

// Function to play one round of the game
function playRound() {
  const userChoice = getUserChoice();
  const computerChoice = getComputerChoice();

  if (userChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    console.log(`You win! ${userChoice} beats ${computerChoice}.`);
    return 1; // Return 1 to increment user score
  } else {
    console.log(`You lose! ${computerChoice} beats ${userChoice}.`);
    return 0; // Return 0 to increment computer score
  }
}

console.log(playRound())

// Function to play 5 rounds of the game and keep score