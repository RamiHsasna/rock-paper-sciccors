function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  switch (randomNumber) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissors";
      break;
  }
}
// Get humanChoice from each button click
document.getElementById("rock").addEventListener("click", () => {
  playRound("rock");
});

document.getElementById("paper").addEventListener("click", () => {
  playRound("paper");
});

document.getElementById("scissors").addEventListener("click", () => {
  playRound("scissors");
});

const result = document.createElement("div");

function playRound(humanChoice) {
  let computerChoice = getComputerChoice();
  console.log(humanChoice);
  console.log(computerChoice);
  let humanScore,
    computerScore = 0;
  if (humanChoice === computerChoice) {
    result.textContent = "It's a tie";
    result.style.textAlign = "center";
    result.style.padding = "10px";
    document.body.appendChild(result);
  }
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    result.textContent = "Human Wins!";
    result.style.textAlign = "center";
    result.style.padding = "10px";
    document.body.appendChild(result);
  }
  if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "scissors" && humanChoice === "paper") ||
    (computerChoice === "paper" && humanChoice === "rock")
  ) {
    computerScore++;
    result.textContent = "Computer Wins!";
    result.style.textAlign = "center";
    result.style.padding = "10px";
    document.body.appendChild(result);
  }
}

// function playGame() {
//   for (let i = 0; i < 5; i++) {
//     playRound();
//   }
//   if (humanScore > computerScore) {
//     console.log("Human wins");
//   } else if (humanScore < computerScore) {
//     console.log("Computer wins");
//   } else {
//     console.log("It's a tie");
//   }
// }

// playGame();
