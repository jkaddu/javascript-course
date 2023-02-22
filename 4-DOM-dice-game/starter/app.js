/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores, roundScore, activePlayer, gamePlaying;

// Example of hoisting
startGame();

let lastDice;
// how to add HTML via JS
// document.querySelector("#current-" + activePlayer).innerHTML = "<em>" + dice + "<em>";

document.querySelector(".btn-roll").addEventListener("click", function () {
  if (gamePlaying) {
    //1. Random Number
    let dice = Math.floor(Math.random() * 6) + 1;
    //2. Display the results
    let diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + ".png";

    //3. Update roundScore IF the number is not 1
    if (dice === 1) {
      // Total score goes to zero if two 6s are rolled
      scores[activePlayer] = 0;
      document.querySelector("#score-" + activePlayer).textContent = "0";
      // alert("You rolled 6 two times in a row :( ");
      nextPlayer();
    } else if (dice !== 1) {
      // Add score
      roundScore += dice;
      document.querySelector("#current-" + activePlayer).textContent =
        roundScore;
    } else {
      // Next player
      nextPlayer();
    }

    lastDice = dice;
  }
});

document.querySelector(".btn-hold").addEventListener("click", function () {
  if (gamePlaying) {
    // Add current score to global score
    // scores[0] = scores[0] + roundScore or scores[1] = scores[1] + roundScore
    // represnets which player is rolling the dice and if they chose to hold it'll add the
    // score to their total. That's why it's player 0(aka player 1) and player 1(aka player 2) in the html
    scores[activePlayer] += roundScore;

    // Update the UI
    document.querySelector("#score-" + activePlayer).textContent =
      scores[activePlayer];
    let input = document.querySelector(".final-score").value;
    let winningScore;
    // Undefined, 0, null or '' are coerced to false values
    // Anything else is coerced to true
    if (input) {
      winningScore = input;
    } else {
      winningScore = 50;
    }

    // Check if player won the game
    if (scores[activePlayer] >= winningScore) {
      document.querySelector("#name-" + activePlayer).textContent = "Winner!";
      document.querySelector(".dice").style.display = "none";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
      gamePlaying = false;
    } else {
      // Next player
      nextPlayer();
    }
  }
});

document.querySelector(".btn-new").addEventListener("click", startGame);

function startGame() {
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;

  document.querySelector(".dice").style.display = "none";
  document.querySelector(".final-score").value = "";

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.querySelector("#name-0").textContent = "Player 1";
  document.querySelector("#name-1").textContent = "Player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}

function nextPlayer() {
  // Next player
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;

  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  // Toggle allows you to go back and forth from player to player
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  // Add and remove will allow one action, I prefer toggle
  // document.querySelector(".player-0-panel").classList.remove("active");
  // document.querySelector(".player-1-panel").classList.add("active");

  // document.querySelector(".dice").style.display = "none";
}
