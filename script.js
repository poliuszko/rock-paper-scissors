"use strict";

const choices = ["paper", "rock", "scissors"];
// console.log(choices);

const getComputerChoice = function () {
  return choices[Math.trunc(Math.random() * 3)];
};
//return choices[(Math.trunc(Math.random()*3))]};

console.log(getComputerChoice());

const playRound = function (playerSelection, computerSelection) {
  //    let playerSelection = prompt('Plase select: Paper Rock or Scissors');
  //    console.log(playerSelection);
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

const game = function () {
  let gameScore = [0, 0];
  for (let i = 0; i < 5; i++) {
    console.log(`GAME ${i + 1}`);
    let roundScore = playRound(
      prompt("Please give your selection:").toLowerCase(),
      getComputerChoice()
    );
    gameScore[0] += roundScore[0];
    gameScore[1] += roundScore[1];
    console.log(`GAME ${i + 1} scores ${gameScore}`);
  }
  if (gameScore[0] > gameScore[1]) {
    console.log("Player is the winner!!!");
  } else if (gameScore[0] === gameScore[1]) {
    console.log("Draw!!");
  } else {
    console.log("Computer wins!!!");
  }
};

//playRound(prompt('Please give your selection:'),getComputerChoice());
game();
