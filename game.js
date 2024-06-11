let humanScore = 0;
let computerScore = 0;
let roundWinner = "";

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    roundWinner = "tie";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    roundWinner = "human";
  } else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "scissors" && humanChoice === "paper") ||
    (computerChoice === "paper" && humanChoice === "rock")
  ) {
    computerScore++;
    roundWinner = "computer";
  }
  updateScoreMessage(roundWinner, humanChoice, computerChoice);
  // console.log(computerScore);
  // console.log(humanScore);
  // console.log(roundWinner);
}

//Get random computer choice
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  switch (randomNumber) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}
function isGameOver() {
  return humanScore === 5 || computerScore === 5;
}

//UI
const scoreInfo = document.getElementById("scoreInfo");
const scoreMessage = document.getElementById("scoreMessage");
const humanScorePara = document.getElementById("playerScore");
const computerScorePara = document.getElementById("computerScore");
const humanSign = document.getElementById("playerSign");
const computerSign = document.getElementById("computerSign");
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");

//Events
rockBtn.addEventListener("click", () => playGame("rock"));
paperBtn.addEventListener("click", () => playGame("paper"));
scissorsBtn.addEventListener("click", () => playGame("scissors"));

function playGame(humanChoice) {
  if (isGameOver()) {
    alert("Game over!");
    restartGame();
  }

  const computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
  updateChoices(humanChoice, computerChoice);
  updateScoreInfo();
}

function updateChoices(humanChoice, computerChoice) {
  switch (humanChoice) {
    case "rock":
      humanSign.textContent = "✊";
      break;
    case "paper":
      humanSign.textContent = "✋";
      break;
    case "scissors":
      humanSign.textContent = "✌";
      break;
  }
  switch (computerChoice) {
    case "rock":
      computerSign.textContent = "✊";
      break;
    case "paper":
      computerSign.textContent = "✋";
      break;
    case "scissors":
      computerSign.textContent = "✌";
      break;
  }
}

function updateScoreInfo() {
  if (roundWinner === "tie") scoreInfo.textContent = "It's a tie!";
  else if (roundWinner === "human") scoreInfo.textContent = "You won!";
  else if (roundWinner === "computer") scoreInfo.textContent = "You Lost!";

  humanScorePara.textContent = `Player: ${humanScore}`;
  computerScorePara.textContent = `Computer: ${computerScore}`;
}

function updateScoreMessage(winner, humanSelection, computerSelection) {
  if (winner === "tie")
    scoreMessage.textContent = `It's a tie! Both selected ${humanSelection}`;
  else if (winner === "human")
    scoreMessage.textContent = ` ${humanSelection} beats ${computerSelection}`;
  else if (winner === "computer")
    scoreMessage.textContent = ` ${humanSelection} is beaten by ${computerSelection}`;
}

function restartGame() {
  humanScore = 0;
  computerScore = 0;
  roundWinner = "";
  scoreInfo.textContent = "";
  scoreMessage.textContent = "";
  humanScorePara.textContent = "Player: 0";
  computerScorePara.textContent = "Computer: 0";
  humanSign.textContent = "❔";
  computerSign.textContent = "❔";
}
