"use strict";
// Selecting elements
const playerScore = document.querySelector(".player");
const computerScore = document.querySelector(".computer");
const gameInfo = document.querySelector(".game_status_container");
const btnPaper = document.querySelector(".paper");
const btnRock = document.querySelector(".rock");
const btnScissors = document.querySelector(".scissors");
const btnInit = document.querySelector(".init");

let gameScore = [0,0];

const init = function () {
  gameScore = [0, 0];
  
  playerScore.textContent = (`Player: ${gameScore[0]}`)
  computerScore.textContent = (`Computer: ${gameScore[1]}`)
  
};
init();



btnPaper.addEventListener("click", function () {
    const choices = ["paper", "rock", "scissors"];
    // console.log(choices);

    const getComputerChoice = function () {
        return choices[Math.trunc(Math.random() * 3)];
        }
    const computerSelection = getComputerChoice();
    
    let roundScore = playRound("paper", computerSelection);
    
    gameScore[0] += roundScore[0];
    gameScore[1] += roundScore[1];
    playerScore.textContent =  `Player: ${gameScore[0]}`;
    computerScore.textContent = `Computer: ${gameScore[1]}`
    console.log(gameScore);
  }
);

btnRock.addEventListener("click", function () {
    const choices = ["paper", "rock", "scissors"];
    // console.log(choices);

    const getComputerChoice = function () {
        return choices[Math.trunc(Math.random() * 3)];
        }
    const computerSelection = getComputerChoice();
    
    let roundScore = playRound("rock", computerSelection);
    
    gameScore[0] += roundScore[0];
    gameScore[1] += roundScore[1];
    playerScore.textContent =  `Player: ${gameScore[0]}`;
    computerScore.textContent = `Computer: ${gameScore[1]}`
    console.log(gameScore);
  }
);

btnScissors.addEventListener("click", function () {
    const choices = ["paper", "rock", "scissors"];
    // console.log(choices);

    const getComputerChoice = function () {
        return choices[Math.trunc(Math.random() * 3)];
        }
    const computerSelection = getComputerChoice();
    
    let roundScore = playRound("scissors", computerSelection);
    
    gameScore[0] += roundScore[0];
    gameScore[1] += roundScore[1];
    playerScore.textContent =  `Player: ${gameScore[0]}`;
    computerScore.textContent = `Computer: ${gameScore[1]}`
    console.log(gameScore);
  }
);


btnInit.addEventListener("click", function () {
    init();

});


const playRound = function (playerSelection, computerSelection) {
  //    let playerSelection = prompt('Plase select: Paper Rock or Scissors');
  //    console.log(playerSelection);
  gameInfo.textContent = `Player selection ${playerSelection} -- Computer Selection ${computerSelection}`;
    console.log(
    `Player selection ${playerSelection} -- Computer Selection ${computerSelection}`
  );
  if (playerSelection === "paper" && computerSelection === "rock") {
    return [1, 0];
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return [1, 0];
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return [1, 0];
  } else if (playerSelection === computerSelection) {
    return [0, 0];
  } else {
    return [0, 1];
  }
};

