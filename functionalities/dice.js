import {
  dice,
  player1AvailableNumbers,
  player2AvailableNumbers,
} from './availableNumberIDs.js';

export default class Dice {
  constructor() {
    this.diceNumbers = [];
    this.availableNumbers = [];
    this.counter = 1;
  }

  rollDice() {
    // reset numbers
    this.diceNumbers = [];
    this.availableNumbers = [];
    this.counter = 1;

    // generate the 6 numbers to be used for the player's turn
    for (let i = 0; i < 6; i++) {
      this.diceNumbers.push(Math.floor(Math.random() * 6) + 1);
    }

    for (let i = 0; i < dice.length; i++) {
      // update the dice area of the board
      dice[i].innerHTML = this.diceNumbers[i];
    }

    // initialize the public number
    this.availableNumbers[0] = this.diceNumbers[0] + this.diceNumbers[1];

    for (let i = 2; i < 6; i++) {
      // construct & store the turn's available numbers
      this.availableNumbers[this.counter] =
        this.diceNumbers[0] + this.diceNumbers[i];
      this.availableNumbers[this.counter + 1] =
        this.diceNumbers[1] + this.diceNumbers[i];

      this.counter += 2;
    }
  }

  updateAvailableNumbers(isPlayer1sTurn) {
    // display the numbers available to each person

    if (isPlayer1sTurn === 1) {
      //player 1's turn
      for (let i = 0; i < 9; i++) {
        player1AvailableNumbers[i].innerHTML = this.availableNumbers[i];
        player2AvailableNumbers[i].innerHTML = '—';
      }
      // player 2 has access to the public number
      player2AvailableNumbers[0].innerHTML = this.availableNumbers[0];
    }

    if (isPlayer1sTurn === 0) {
      //player 2's turn
      for (let i = 0; i < 9; i++) {
        player2AvailableNumbers[i].innerHTML = this.availableNumbers[i];
        player1AvailableNumbers[i].innerHTML = '—';
      }
      // player 1 has access to the public number
      player1AvailableNumbers[0].innerHTML = this.availableNumbers[0];
    }
  }
}
