//Function to get a random computer choice
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

// Play 5 rounds of the game and update the roundText with the current round
function playGame(userChoice) {
  const scoreBoard = document.querySelector('.scoreBoard');
  const roundText = document.querySelector('.roundText');
  const result = playRound(userChoice);
  scoreBoard.innerHTML += `<p>${result}</p>`;

  const roundsPlayed = scoreBoard.getElementsByTagName('p').length;
  roundText.textContent = `Round ${roundsPlayed}:`;

  if (roundsPlayed === 5) {
    setTimeout(() => {
      keepScore(scoreBoard);
      setTimeout(() => {
        restartGame(scoreBoard);
      }, 0);
    }, 0);
  }
}

// Keep track of the score and display the final game result
function keepScore(scoreBoard) {
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
    gameResult = 'You win the game! Congratulations!';
  } else if (userScore < computerScore) {
    gameResult = 'You lose the game! Try again!';
  } else {
    gameResult = 'The game ends in a tie!';
  }

  scoreBoard.innerHTML += `<p>${gameResult}</p>`;
}

// Restart the game and clear the scoreboard
function restartGame(scoreBoard) {
  const gameResult = scoreBoard.querySelector('p:last-child').textContent;
  setTimeout(() => {
    const restart = confirm(`${gameResult} Do you want to restart the game?`);
    if (restart) {
      scoreBoard.innerHTML = '<h2 class="scoreTitle">Score Board</h2>';
      const roundText = document.querySelector('.roundText');
      roundText.textContent = '';
    }
  }, 1000); // Delay the prompt by 1000 milliseconds (1 second)
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
