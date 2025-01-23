// Computer Choice Logic

function getComputerChoice() {
  let compChoice = Math.floor(Math.random() * 100);
  console.log(compChoice);

  (compChoice >= 0 && compChoice <= 33) ? compChoice = "Rock"
  : (compChoice > 33 && compChoice <= 66 ) ? compChoice = "Paper"
  : compChoice = "Scissors";
  
  console.log(compChoice);
}

// User Choice Logic


// Score Tracking