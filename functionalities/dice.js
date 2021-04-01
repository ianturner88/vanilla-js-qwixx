// the 6 dice
const publicNumber1 = document.querySelector('[data-public-dice-1]');
const publicNumber2 = document.querySelector('[data-public-dice-2]');
const redDice = document.querySelector('[data-red-dice]');
const yellowDice = document.querySelector('[data-yellow-dice]');
const greenDice = document.querySelector('[data-green-dice]');
const blueDice = document.querySelector('[data-blue-dice]');

// the 9 available numbers
const availablePublicNumber = document.querySelector(
  '[data-player-1-available-white]'
);
const availableRed1 = document.querySelector('[data-player-1-available-red-1]');
const availableRed2 = document.querySelector('[data-player-1-available-red-2]');
const availableYellow1 = document.querySelector(
  '[data-player-1-available-yellow-1]'
);
const availableYellow2 = document.querySelector(
  '[data-player-1-available-yellow-2]'
);
const availableGreen1 = document.querySelector(
  '[data-player-1-available-green-1]'
);
const availableGreen2 = document.querySelector(
  '[data-player-1-available-green-2]'
);
const availableBlue1 = document.querySelector(
  '[data-player-1-available-blue-1]'
);
const availableBlue2 = document.querySelector(
  '[data-player-1-available-blue-2]'
);

export default class Dice {
  constructor() {
    // initialize all numbers to zero
    this.publicNumber1 = 0;
    this.publicNumber2 = 0;
    this.redDice = 0;
    this.yellowDice = 0;
    this.greenDice = 0;
    this.blueDice = 0;
  }

  rollDice() {
    // generate the random numbers for the dice
    this.publicNumber1 = Math.floor(Math.random() * 6) + 1;
    this.publicNumber2 = Math.floor(Math.random() * 6) + 1;
    this.redDice = Math.floor(Math.random() * 6) + 1;
    this.yellowDice = Math.floor(Math.random() * 6) + 1;
    this.greenDice = Math.floor(Math.random() * 6) + 1;
    this.blueDice = Math.floor(Math.random() * 6) + 1;

    //update the dice numbers on the user side
    publicNumber1.innerHTML = `${this.publicNumber1}`;
    publicNumber2.innerText = `${this.publicNumber2}`;
    redDice.innerText = `${this.redDice}`;
    yellowDice.innerText = `${this.yellowDice}`;
    greenDice.innerText = `${this.greenDice}`;
    blueDice.innerText = `${this.blueDice}`;

    //update the available number display
    availablePublicNumber.innerHTML = this.publicNumber1 + this.publicNumber2;
    availableRed1.innerHTML = this.publicNumber1 + this.redDice;
    availableRed2.innerHTML = this.publicNumber2 + this.redDice;
    availableYellow1.innerHTML = this.publicNumber1 + this.yellowDice;
    availableYellow2.innerHTML = this.publicNumber2 + this.yellowDice;
    availableGreen1.innerHTML = this.publicNumber1 + this.greenDice;
    availableGreen2.innerHTML = this.publicNumber2 + this.greenDice;
    availableBlue1.innerHTML = this.publicNumber1 + this.blueDice;
    availableBlue2.innerHTML = this.publicNumber2 + this.blueDice;
  }
}
