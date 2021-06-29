import Dice from './functionalities/dice.js';
import Player from './functionalities/players.js';

import {
  p1RedNumberSelected,
  p1YellowNumberSelected,
  p1GreenNumberSelected,
  p1BlueNumberSelected,
  p2RedNumberSelected,
  p2YellowNumberSelected,
  p2GreenNumberSelected,
  p2BlueNumberSelected,
} from './functionalities/boardButtons.js';

import { player1Buttons, player2Buttons } from './functionalities/buttonIDs.js';

const newRoll = document.querySelector('[data-roll-dice]');
const playerTurnDisplay = document.querySelector('[data-turn-keeper-display]');

const dice = new Dice();
const player1 = new Player();
const player2 = new Player();

let isPlayer1sTurn = 0;

newRoll.addEventListener('click', (e) => {
  // triggered by 'Roll Dice' button

  // toggle between player 1's & 2's turns
  isPlayer1sTurn =
    isPlayer1sTurn === 1 ? (isPlayer1sTurn = 0) : (isPlayer1sTurn = 1);

  playerTurnDisplay.innerHTML = isPlayer1sTurn == 1 ? '1' : '2';

  // generate 6 random numbers, display dice numbers, and construct available numbers
  dice.rollDice();
  // set all buttons to unavailable
  dice.setAllButtonsToUnavailable();
  // public number displayed & id tags generated
  dice.publicNumber();
});

// all coloured the buttons on player 1's board
p1RedNumberSelected.forEach((button) =>
  // player 1's RED buttons
  button.addEventListener('click', () => {
    let playerPick = ['RED', button.innerText];
    player1.currentPick(playerPick);
  })
);

p1YellowNumberSelected.forEach((button) =>
  // player 1's YELLOW buttons
  button.addEventListener('click', () => {
    console.log(button.innerText);
  })
);

p1GreenNumberSelected.forEach((button) =>
  // player 1's GREEN buttons
  button.addEventListener('click', () => {
    console.log(button.innerText);
  })
);

p1BlueNumberSelected.forEach((button) =>
  // player 1's BLUE buttons
  button.addEventListener('click', () => {
    console.log(button.innerText);
  })
);

// all coloured the buttons on player 2's board
p2RedNumberSelected.forEach((button) =>
  // player 2's RED buttons
  button.addEventListener('click', () => {
    console.log(button.innerText);
  })
);

p2YellowNumberSelected.forEach((button) =>
  // player 2's YELLOW buttons
  button.addEventListener('click', () => {
    console.log(button.innerText);
  })
);

p2GreenNumberSelected.forEach((button) =>
  // player 2's GREEN buttons
  button.addEventListener('click', () => {
    console.log(button.innerText);
  })
);

p2BlueNumberSelected.forEach((button) =>
  // player 2's BLUE buttons
  button.addEventListener('click', () => {
    console.log(button.innerText);
  })
);
