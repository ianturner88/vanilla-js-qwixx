export default class Dice {
  // the dice used to generate the random numbers 1 through 6

  constructor() {
    // initialize all numbers to zero
    this.publicNumber1 = 0;
    this.redNumber1 = 0;
    this.yellowNumber1 = 0;
    this.greenNumber1 = 0;
    this.blueNumber1 = 0;
    this.publicNumber2 = 0;
    this.redNumber2 = 0;
    this.yellowNumber2 = 0;
    this.greenNumber2 = 0;
    this.blueNumber2 = 0;
  }

  rollDice() {
    // initiated by user
    // all numbers are given a new number between 1 & 6

    let counter = 0;

    while (counter < 100) {
      // creates a nice visual effect of the dice numbers changing
      this.publicNumber1 = Math.floor(Math.random() * 6) + 1;
      this.redNumber1 = Math.floor(Math.random() * 6) + 1;
      this.yellowNumber1 = Math.floor(Math.random() * 6) + 1;
      this.greenNumber1 = Math.floor(Math.random() * 6) + 1;
      this.blueNumber1 = Math.floor(Math.random() * 6) + 1;
      this.publicNumber2 = Math.floor(Math.random() * 6) + 1;
      this.redNumber2 = Math.floor(Math.random() * 6) + 1;
      this.yellowNumber2 = Math.floor(Math.random() * 6) + 1;
      this.greenNumber2 = Math.floor(Math.random() * 6) + 1;
      this.blueNumber2 = Math.floor(Math.random() * 6) + 1;

      counter++;
    }

    this.publicNumber1 = Math.floor(Math.random() * 6) + 1;
    this.redNumber1 = Math.floor(Math.random() * 6) + 1;
    this.yellowNumber1 = Math.floor(Math.random() * 6) + 1;
    this.greenNumber1 = Math.floor(Math.random() * 6) + 1;
    this.blueNumber1 = Math.floor(Math.random() * 6) + 1;
    this.publicNumber2 = Math.floor(Math.random() * 6) + 1;
    this.redNumber2 = Math.floor(Math.random() * 6) + 1;
    this.yellowNumber2 = Math.floor(Math.random() * 6) + 1;
    this.greenNumber2 = Math.floor(Math.random() * 6) + 1;
    this.blueNumber2 = Math.floor(Math.random() * 6) + 1;
  }
}
