console.log('Hello World!');

//store random computer decision
const getComputerChoice = () => {
    const selection = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random()*selection.length);
    return selection[randomIndex];
}

const randomIndex = getComputerChoice();
console.log(randomIndex); //hide when finished

//store user decision (case insensitive)
const getUserChoice = function() {
    let userInput = prompt("Let's play a game of Rock, Paper, Scissors! Type what you are going to play with:");
    userInput = userInput.toLowerCase();
    return userInput;
  };

const myInput = getUserChoice();
console.log(myInput); //hide when finished
  
  
//play 1 round that uses user choice against computer choice
const playRound = function(playerSelection, computerSelection) {
    // Check for a tie
    if (myInput === randomIndex) {
      return "It's a tie!";
    }
  
    // Check for player wins
    if ((myInput === 'rock' && randomIndex === 'scissors') ||
        (myInput === 'paper' && randomIndex === 'rock') ||
        (myInput === 'scissors' && randomIndex === 'paper')) {
      return "You win! " + myInput + " beats " + randomIndex;
    }
  
    // If neither tie nor player wins, the computer wins
    return "You lose! " + randomIndex + " beats " + myInput;
  }
  
  // Test the function with player input and random computer input
  const playerSelection = getUserChoice
  const computerSelection = getComputerChoice
  
  console.log(playRound(playerSelection, computerSelection));
//5 round game that tracks the score at the end then announces it (loops)