/*
// 1- put your money on bet
// 2- number of lines to bet on
// 3- collect the bet amount
// 4- spin the fruit machine
5- check if the user wins
6- give the user their winnings
7- play again
*/

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
  A: 4,
  B: 9,
  C: 2,
  D: 6,
};

const SYMBOLS_VALUES = {
  A: 5,
  B: 7,
  C: 4,
  D: 8,
};

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

const spin = () => {
  const symbols = [];
  for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
    //  console.log(`${symbol} : ${value}`);
    for (let i = 0; i < count; i++) {
      symbols.push(symbol);
    }
  }

  const reels = [];
  for (let i = 0; i < COLS; i++) {
    reels.push([]);
    let reelSymbols = [...symbols];
    for (let j = 0; j < ROWS; j++) {
      let randomIndex = Math.floor(Math.random() * reelSymbols.length);
      let selectedSymbol = reelSymbols[randomIndex];
      reels[i].push(selectedSymbol);
      reelSymbols.splice(randomIndex, 1);
    }
  }

  return reels;
};

const transpose = (reels) => {
  const rows = [];
  for (let i = 0; i < ROWS; i++) {
    rows.push([]);
    // 0 - rows = [[]]
    for (let j = 0; j < COLS; j++) {
      // 0 - rows = [0:[]]

      rows[i].push(reels[j][i]);
    }
  }
  return rows;
};

const printFruitMachine = (arr) => {
  for (const row of arr) {
    let sym = "";
    for (const [i, symbol] of row.entries()) {
      sym += symbol;
      if (i != row.length - 1) {
        sym += " | ";
      }
    }
    console.log(sym);
  }
};
// let balance = deposit();
// const numberOfLines = getNumOfLines();
// const bet = getTheBetAmount(balance, numberOfLines);
const result = spin();
const reels = transpose(result);
printFruitMachine(reels);
