import Dice from './functionalities/dice.js';

const newRoll = document.querySelector('[data-roll-dice]');

const dice = new Dice();

var isPlayer1sTurn = 0;

newRoll.addEventListener('click', (e) => {
  isPlayer1sTurn =
    isPlayer1sTurn == 1 ? (isPlayer1sTurn = 0) : (isPlayer1sTurn = 1);

  dice.rollDice();
  if (isPlayer1sTurn == 1) {
    dice.player1sTurn();
  } else {
    dice.player2sTurn();
  }
});
