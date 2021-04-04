import Dice from './functionalities/dice.js';
import Player from './functionalities/players.js';

import {
  p1Red2Selected,
  p1Red3Selected,
  p1Red4Selected,
  p1Red5Selected,
  p1Red6Selected,
  p1Red7Selected,
  p1Red8Selected,
  p1Red9Selected,
  p1Red10Selected,
  p1Red11Selected,
  p1Red12Selected,
} from './functionalities/boardButtons.js';

import {
  player1RedNumbers,
  player1YellowNumbers,
  player1GreenNumbers,
  player1BlueNumbers,
  player2RedNumbers,
  player2YellowNumbers,
  player2GreenNumbers,
  player2BlueNumbers,
} from './functionalities/buttonIDs.js';

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
    dice.setAllButtonsToUnavailable(player1RedNumbers);
    dice.setAllButtonsToUnavailable(player1YellowNumbers);
    dice.setAllButtonsToUnavailable(player1GreenNumbers);
    dice.setAllButtonsToUnavailable(player1BlueNumbers);
    dice.enableValidButtons('1', dice.player1AvailableNumbers);
    dice.enableValidButtons('2', dice.player2AvailableNumbers);
    return;
  }

  // player 2's turn
  dice.player2sTurn();
  dice.setAllButtonsToUnavailable(player2RedNumbers);
  dice.setAllButtonsToUnavailable(player2YellowNumbers);
  dice.setAllButtonsToUnavailable(player2GreenNumbers);
  dice.setAllButtonsToUnavailable(player2BlueNumbers);
  dice.enableValidButtons('1', dice.player1AvailableNumbers);
  dice.enableValidButtons('2', dice.player2AvailableNumbers);
});

p1Red2Selected.addEventListener('click', (e) => {});

p1Red3Selected.addEventListener('click', (e) => {});
