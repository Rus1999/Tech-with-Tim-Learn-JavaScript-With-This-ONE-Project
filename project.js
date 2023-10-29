// deposit
// bet option (line 1-3)
// bet amout (balance / line)
// sping slot
// check win
// give money if win
// play again

// import
const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
  A: 2,
  B: 4,
  C: 6,
  D: 8,
};

// payout
const SYMBOL_VALUES = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
};

// function deposit(){}
const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Invalid deposit amount, please try again.");
    } else {
      return numberDepositAmount;
    }
  }
};

const getNumberOfLines = () => {
  while (true) {
    const lines = prompt("Enter the number of lines to bet on (1-3): ");
    const numberOfLines = parseFloat(lines);

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("Invalid number of lines, please try again.");
    } else {
      return numberOfLines;
    }
  }
};

const getBet = (balance, lines) => {
  while (true) {
    const betAmount = prompt("Enter the bet amount per line: ");
    const numberBetAmount = parseFloat(betAmount);

    if (
      isNaN(numberBetAmount) ||
      numberBetAmount <= 0 ||
      numberBetAmount > balance / lines
    ) {
      console.log("Invalid bet, please try again.");
    } else {
      return numberBetAmount;
    }
  }
};

const spin = () => {
  // array can be manipulate data because it's reffence data
  const symbols = [];
  // loop throught all the symbol in SYMBOLS_COUNT then store it
  // in symbol and count variable in each loop
  // ex. loop1 > console.log(symbol, count) > A 2
  for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
    // push each <symbol> to the <symbols> object <count> times
    for (let i = 0; i < count; i++) {
      symbols.push(symbol);
    }
  }

  // represent the column in slot
  const reels = [];
  for (let i = 0; i < COLS; i++) {
    // push the [] in the [] => [[]]
    reels.push([]);
    // copy and paste value
    const reelSymbols = [...symbols];
    for (let j = 0; j < ROWS; j++) {
      // random (0-1) * amount of element in object
      const randomIndex = Math.floor(Math.random() * reelSymbols.length);
      const selectedSymbol = reelSymbols[randomIndex];
      reels[i].push(selectedSymbol);
      // remove element at randomIndex
      reelSymbols.splice(randomIndex, 1);
    }
  }

  return reels;
};

// turn collumns into rows
const transpose = (reels) => {
  const rows = [];

  for (let i = 0; i < ROWS; i++) {
    rows.push([]);
    for (let j = 0; j < COLS; j++) {
      rows[i].push(reels[j][i]);
    }
  }

  return rows;
};

const printRows = (rows) => {
  for (const row of rows) {
    let rowString = "";
    // loop through all element in rows
    // ex. ['A', 'B', 'C'] on first loop
    // will get i = 0 and symbol = 'A'
    for (const [i, symbol] of row.entries()) {
      rowString += symbol;
      if (i != rows.length - 1) {
        rowString += " | ";
      }
    }
    console.log(rowString);
  }
};

const getWinnings = (rows, bet, lines) => {
  let winnings = 0;

  for (let row = 0; row < lines; row++) {
    const symbols = rows[row];
    let allSame = true;

    for (const symbol of symbols) {
      // check if all the symbol are the same with the first symbol
      if (symbol != symbols[0]) {
        allSame = false;
        break;
      }
    }
    if (allSame) {
      winnings += bet * SYMBOL_VALUES[symbols[0]];
    }
  }

  return winnings;
};

const game = () => {
  let balance = deposit();

  while (true) {
    console.log("You have a balance of $" + balance);
    // console.log(balance);
    const numberOfLines = getNumberOfLines();
    // console.log(numberOfLines);
    const bet = getBet(balance, numberOfLines);
    balance -= bet * numberOfLines;
    const reels = spin();
    // console.log(reels);
    const rows = transpose(reels);
    // console.log(reels);
    // console.log(rows);
    printRows(rows);
    const winnings = getWinnings(rows, bet, numberOfLines);
    balance += winnings;
    console.log("You won, $" + winnings.toString());
    if (balance <= 0) {
      console.log("You have no money!");
      break;
    }

    const playAgain = prompt('Play again (y/n)?');

    if (playAgain != 'y') break;

  }
};

game();
