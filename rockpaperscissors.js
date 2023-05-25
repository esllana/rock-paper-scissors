// Function to get a random computer choice
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to play one round of the game
function playRound(userChoice) {
  const computerChoice = getComputerChoice();

  if (userChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return `You win! ${userChoice} beats ${computerChoice}.`;
  } else {
    return `You lose! ${computerChoice} beats ${userChoice}.`;
  }
}

// Function to play the game and keep score
function playGame(userChoice) {
  const scoreBoard = document.querySelector('.scoreBoard');
  const roundText = document.querySelector('.roundText');
  const result = playRound(userChoice);
  scoreBoard.innerHTML += `<p>${result}</p>`;

  const roundsPlayed = scoreBoard.getElementsByTagName('p').length;
  roundText.textContent = `Round ${roundsPlayed}:`;

  if (roundsPlayed === 5) {
    const results = scoreBoard.querySelectorAll('p');
    let userScore = 0;
    let computerScore = 0;

    results.forEach(result => {
      if (result.textContent.includes('win')) {
        userScore++;
      } else if (result.textContent.includes('lose')) {
        computerScore++;
      }
    });

    let gameResult = '';
    if (userScore > computerScore) {
      gameResult = 'You win the game!';
    } else if (userScore < computerScore) {
      gameResult = 'You lose the game!';
    } else {
      gameResult = 'The game ends in a tie!';
    }

    scoreBoard.innerHTML += `<p>${gameResult}</p>`;
  }
}

// Get all the buttons with class "playButton"
const playButtons = document.querySelectorAll('.playButton');

// Add event listeners to each button
playButtons.forEach(button => {
  button.addEventListener('click', function() {
    const userChoice = button.dataset.choice;
    playGame(userChoice);
  });
});
