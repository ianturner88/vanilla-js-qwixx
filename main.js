import Dice from './functionalities/dice.js';
import Player from './functionalities/players.js';

import { p1RedNumberSelected } from './functionalities/boardButtons.js';

import { player1Buttons, player2Buttons } from './functionalities/buttonIDs.js';

const newRoll = document.querySelector('[data-roll-dice]');
const playerTurnDisplay = document.querySelector('[data-turn-keeper-display]');

const dice = new Dice();
const player1 = new Player();
const player2 = new Player();

var isPlayer1sTurn = 0;

newRoll.addEventListener('click', (e) => {
  // toggle between player 1's & 2's turns
  isPlayer1sTurn =
    isPlayer1sTurn == 1 ? (isPlayer1sTurn = 0) : (isPlayer1sTurn = 1);

  playerTurnDisplay.innerHTML = isPlayer1sTurn == 1 ? '1' : '2';

  // roll the dice & generate available numbers
  dice.rollDice();

  if (isPlayer1sTurn == 1) {
    // player 1's turn
    dice.player1sTurn();
    dice.setAllButtonsToUnavailable(player1Buttons);
    dice.enableValidButtons('1', dice.player1AvailableNumbers);
    dice.enableValidButtons('2', dice.player2AvailableNumbers);
    return;
  }

  // player 2's turn
  dice.player2sTurn();
  dice.setAllButtonsToUnavailable(player2Buttons);
  dice.enableValidButtons('1', dice.player1AvailableNumbers);
  dice.enableValidButtons('2', dice.player2AvailableNumbers);
});

p1RedNumberSelected.addEventListener('click', (e) => {});
