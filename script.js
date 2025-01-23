// Computer Choice Logic

function getComputerChoice() {
  let compChoice = Math.floor(Math.random() * 100);

  (compChoice >= 0 && compChoice <= 33) ? compChoice = "Rock" :
  (compChoice > 33 && compChoice <= 66 ) ? compChoice = "Paper" :
  compChoice = "Scissors";
}

// User Choice Logic

function getHumanChoice() {
  let userChoice = prompt("Pick 'Rock', 'Paper' or 'Scissors'!");

  if (userChoice.toLowerCase() === "rock") {
    userChoice = userChoice.toLowerCase();
    console.log("You've chosen 'Rock'");
  } else if (userChoice.toLowerCase() === "paper") {
    userChoice = userChoice.toLowerCase();
    console.log("You've chosen 'Paper'");
  } else if (userChoice.toLowerCase() === "scissors") {
    userChoice = userChoice.toLowerCase();
    console.log("You've chosen 'Scissors'");
  } else {
    console.log("Please pick a valid option! 'Rock', 'Paper' or 'Scissors'.")
    getHumanChoice();
  }
  
  console.log(userChoice);
}

// Score Tracking