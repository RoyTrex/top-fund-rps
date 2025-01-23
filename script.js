// Computer Choice Logic

function getComputerChoice() {
  let compChoice = Math.floor(Math.random() * 100);

  (compChoice >= 0 && compChoice <= 33) ? compChoice = "rock" :
  (compChoice > 33 && compChoice <= 66 ) ? compChoice = "paper" :
  compChoice = "scissors";

  return compChoice;
}


// User Choice Logic

function getUserChoice() {
  let userChoice = prompt("Pick 'Rock', 'Paper' or 'Scissors'!");

  if (userChoice.toLowerCase() === "rock") {
    console.log("You've chosen 'Rock'");
  } else if (userChoice.toLowerCase() === "paper") {
    console.log("You've chosen 'Paper'");
  } else if (userChoice.toLowerCase() === "scissors") {
    console.log("You've chosen 'Scissors'");
  } else {
    console.log("Please pick a valid option! 'Rock', 'Paper' or 'Scissors'.")
    getUserChoice();
  }
  
  return userChoice;
}


// Game Logic

function playGame() {
  // Score Initialization

  let userScore = 0;
  let computerScore = 0;

  // Round Logic

  function playRound(userChoice, computerChoice) {
    userChoice = userChoice.toLowerCase();

    if (userChoice === computerChoice) {
      console.log("Tie!");
    } else if (
      userChoice === 'rock' && computerChoice === 'scissors'
      || userChoice === 'paper' && computerChoice === 'rock'
      || userChoice === 'scissors' && computerChoice === 'paper'
      ) {
        choiceOne = userChoice.at(0).toUpperCase() + userChoice.slice(1);
        choiceTwo = computerChoice.at(0).toUpperCase() + computerChoice.slice(1);

        userScore += 1;
        console.log(`You win! ${choiceOne} beats ${choiceTwo}`);
    } else {
      choiceOne = userChoice.at(0).toUpperCase() + userChoice.slice(1);
      choiceTwo = computerChoice.at(0).toUpperCase() + computerChoice.slice(1);
    
      computerScore += 1;
      console.log(`You lost! ${choiceTwo} beats ${choiceOne}`);
    }
  }

  // Round Loop

  for (let i = 1; i < 6; i++) {
    console.log(`Round ${i}:`);
    playRound(getUserChoice(), getComputerChoice());
    console.log("----------");
  }

  // Announce Winner
  
  if (userScore > computerScore) {
    console.log(`You've won this game with a score of ${userScore} to ${computerScore}. Congratulations!`);
  } else {
    console.log(`You've lost this game with a score of ${userScore} to ${computerScore}. Better luck next time.`);
  }
}

playGame();