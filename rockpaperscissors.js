console.log('Hello World!');

//store random computer decision
const getComputerChoice = () => {
    const selection = ['Rock', 'Paper', 'Scissors'];
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
console.log(myInput);
  
  


//play 1 round that uses user input against computer choice

//result if user win/lose
//5 round game that tracks the score at the end then announces it