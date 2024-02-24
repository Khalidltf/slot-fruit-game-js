/*
// 1- put your money on bet
// 2- number of lines to bet on
// 3- collect the bet amount
4- spin the fruit machine
5- check if the user wins
6- give the user their winnings
7- play again
*/

const prompt = require("prompt-sync")();

const deposit = () => {
  while (true) {
    let input = prompt("Enter a bet amount : ");
    const betAmount = parseFloat(input);

    if (isNaN(betAmount) || betAmount <= 0)
      console.log("Invalid bet amount! try again!");
    else return betAmount;
  }
};

const getNumOfLines = () => {
  while (true) {
    let numOfLines = prompt("Enter the number of lines u bet ON 1-3: ");
    let lines = parseFloat(numOfLines);

    if (isNaN(lines) || lines <= 0 || lines > 3)
      console.log("Invalid number of Lines retry!");
    else return lines;
  }
};

const getTheBetAmount = (balance, lines) => {
  while (true) {
    let theBetAmount = prompt("Enter the bet amount per line: ");
    const bet = parseFloat(theBetAmount);

    if (isNaN(bet) || bet <= 0 || bet > balance / lines)
      console.log("Invalid bet amount, retry to enter the correct bet amount");
    else return bet;
  }
};

let balance = deposit();
const numberOfLines = getNumOfLines();
const bet = getTheBetAmount(balance, numberOfLines);
