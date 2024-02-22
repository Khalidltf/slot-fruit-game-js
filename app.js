/*
1- put your money on bet
2- number of lines to bet on
3- collect the bet amount
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

const amount = deposit();
console.log(typeof amount);
