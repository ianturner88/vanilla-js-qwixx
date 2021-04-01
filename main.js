import Dice from './functionalities/dice.js';

const newRoll = document.querySelector('[data-roll-dice]');

const dice = new Dice();

var isPlayer1sTurn = 0;

newRoll.addEventListener('click', (e) => {
  // toggle between player 1's & 2's turns
  isPlayer1sTurn =
    isPlayer1sTurn == 1 ? (isPlayer1sTurn = 0) : (isPlayer1sTurn = 1);

  // roll the dice & generate available numbers
  dice.rollDice();
  if (isPlayer1sTurn == 1) {
    // player 1's turn
    dice.player1sTurn();
    return;
  }

  // player 2's turn
  dice.player2sTurn();
});
