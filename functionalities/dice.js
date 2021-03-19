const publicNumber1 = document.querySelector('[data-white-dice-1]');
const publicNumber2 = document.querySelector('[data-white-dice-2]');
const redDice = document.querySelector('[red-dice]');
const yellowDice = document.querySelector('[yellow-dice]');
const greenDice = document.querySelector('[green-dice]');
const blueDice = document.querySelector('[blue-dice]');

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
    this.publicNumber1 = Math.floor(Math.random() * 6) + 1;
    this.publicNumber2 = Math.floor(Math.random() * 6) + 1;
    this.redDice = Math.floor(Math.random() * 6) + 1;
    this.yellowDice = Math.floor(Math.random() * 6) + 1;
    this.greenDice = Math.floor(Math.random() * 6) + 1;
    this.blueDice = Math.floor(Math.random() * 6) + 1;

    console.log('Hello');
    publicNumber1.innerText = `${this.publicNumber1}`;
    // publicNumber2.innerText = `${this.publicNumber2}`;
    // redDice.innerText = `${this.redDice}`;
    // yellowDice.innerText = `${this.yellowDice}`;
    // greenDice.innerText = `${this.greenDice}`;
    // blueDice.innerText = `${this.blueDice}`;
  }
}
