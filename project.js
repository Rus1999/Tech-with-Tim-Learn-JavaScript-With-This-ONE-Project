// deposit
// bet option (line 1-3)
// bet amout (balance / line)
// sping slot
// check win
// give money if win
// play again

// import
const prompt = require('prompt-sync')();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
  "A": 2,
  "B": 4,
  "C": 6,
  "D": 8
}

// payout
const SYMBOLS_VALUES = {
  "A": 5,
  "B": 4,
  "C": 3,
  "D": 2
}

// function deposit(){}
const deposit = () => {
  while (true) {
    const depositAmount = prompt('Enter a deposit amount: ');
    const numberDepositAmount = parseFloat(depositAmount);
  
    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log('Invalid deposit amount, please try again.')
    } else {
      return numberDepositAmount;
    }
  }
};

const getNumberOfLines = () => {
  while (true) {
    const lines = prompt('Enter the number of lines to bet on (1-3): ');
    const numberOfLines = parseFloat(lines);

    if (isNaN(numberOfLines) || numberOfLines <=0 || numberOfLines > 3) {
      console.log('Invalid number of lines, please try again.');
    } else {
      return numberOfLines;
    }
  }
}

const getBet = (balance, lines) => {
  while (true) {
    const betAmount = prompt('Enter the bet amount per line: ');
    const numberBetAmount = parseFloat(betAmount);

    if (isNaN(numberBetAmount) || numberBetAmount <= 0 || numberBetAmount > (balance / lines)) {
      console.log('Invalid bet, please try again.');
    } else {
      return numberBetAmount;
    }
  }
}

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
  const reels = [[], [], []];
  for (let i = 0; i < COLS; i++){
    const reelSymbols = [...symbols];
    for (let j = 0; j< ROWS; j++) {
      const selectedSymbol = reelSymbols[]
    }
  }
}

spin();

let balance = deposit();
console.log(balance);

const numberOfLines = getNumberOfLines();
console.log(numberOfLines);

const bet = getBet(balance, numberOfLines);