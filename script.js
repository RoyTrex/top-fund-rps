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
    // userChoice = userChoice.toLowerCase();
    console.log("You've chosen 'Rock'");
  } else if (userChoice.toLowerCase() === "paper") {
    // userChoice = userChoice.toLowerCase();
    console.log("You've chosen 'Paper'");
  } else if (userChoice.toLowerCase() === "scissors") {
    // userChoice = userChoice.toLowerCase();
    console.log("You've chosen 'Scissors'");
  } else {
    console.log("Please pick a valid option! 'Rock', 'Paper' or 'Scissors'.")
    getUserChoice();
  }
  
  return userChoice;
}

// Score Tracking

let humanScore = 0;
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

      console.log(`You win! ${choiceOne} beats ${choiceTwo}`);
  } else if (
    userChoice === "rock" && computerChoice === "paper"
    || userChoice === "paper" && computerChoice === "scissors"
    || userChoice === "scissors" && computerChoice === "rock"
  ) {
    choiceOne = userChoice.at(0).toUpperCase() + userChoice.slice(1);
    choiceTwo = computerChoice.at(0).toUpperCase() + computerChoice.slice(1);
  
    console.log(`You lost! ${choiceTwo} beats ${choiceOne}`);
  }
}

const userSelection = getUserChoice();
const computerSelection = getComputerChoice();

playRound(userSelection, computerSelection);



// Possibilities:
// when User = Rock
//  Rock x Rock = Tie
//  Rock x Paper = Lose
//  Rock x Scissors = Win
// when User = Paper
//  Paper x Rock = Win
//  Paper x Paper = Tie
//  Paper x Scissors = Lose
// when User = Scissors
//  Scissors x Rock = Lose
//  Scissors x Paper = Win
//  Scissors x Scissors = Tie
