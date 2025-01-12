const playerOneScoreDisplay = document.getElementById("player1");
const playerTwoScoreDisplay = document.getElementById("player2");
const upToSelect = document.getElementById("scoreSelection");
const playerOneButton = document.getElementById("player1button");
const playerTwoButton = document.getElementById("player2button");
const resetButton = document.getElementById("resetbutton");
let upToScore = upToSelect.value;
let playerOneScore = 0;
let playerTwoScore = 0;

playerOneButton.addEventListener("click", () => updateScore("playerOne"));

playerTwoButton.addEventListener("click", () => updateScore("playerTwo"));

resetButton.addEventListener("click", () => {
  playerOneScore = 0;
  playerTwoScore = 0;
  playerOneScoreDisplay.textContent = playerOneScore;
  playerTwoScoreDisplay.textContent = playerTwoScore;
  playerOneScoreDisplay.classList.remove("has-text-success", "has-text-danger");
  playerTwoScoreDisplay.classList.remove("has-text-success", "has-text-danger");
  toggleButtons();
});

upToSelect.addEventListener("change", () => {
  upToScore = upToSelect.value;
});

function updateScore(player) {
  if (player == "playerOne") {
    playerOneScore++;
    playerOneScoreDisplay.textContent = playerOneScore;
  } else {
    playerTwoScore++;
    playerTwoScoreDisplay.textContent = playerTwoScore;
  }
  if (playerOneScore >= upToScore || playerTwoScore >= upToScore) {
    toggleButtons();
    if (playerOneScore > playerTwoScore) {
      playerOneScoreDisplay.classList.toggle("has-text-success");
      playerTwoScoreDisplay.classList.toggle("has-text-danger");
    } else {
      playerOneScoreDisplay.classList.toggle("has-text-danger");
      playerTwoScoreDisplay.classList.toggle("has-text-success");
    }
  }
}

function toggleButtons() {
  playerOneButton.toggleAttribute("disabled");
  playerTwoButton.toggleAttribute("disabled");
  resetButton.toggleAttribute("disabled");
}
