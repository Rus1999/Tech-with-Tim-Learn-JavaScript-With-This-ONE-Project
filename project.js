// deposit
// bet option (line 1-3)
// bet amout
// sping slot
// check win
// give money if win
// play again

// import
const prompt = require('prompt-sync')();

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

const getBet = (balance) => {
  while (true) {
    const betAmount = prompt('Enter the bet amount: ');
    const numberBetAmount = parseFloat(betAmount);

    if (isNaN(numberBetAmount) || numberBetAmount <= 0 || numberBetAmount > balance) {
      console.log('Invalid bet, please try again.');
    } else {
      return numberBetAmount;
    }
  }
}

let balance = deposit();
console.log(balance);

const numberOfLines = getNumberOfLines();
console.log(numberOfLines);

const bet = getBet(balance);