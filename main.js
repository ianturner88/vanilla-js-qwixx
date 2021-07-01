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
const checkBox1 = document.querySelector('[data-cb1]');
const checkBox2 = document.querySelector('[data-cb2]');

const dice = new Dice();
const player1 = new Player();
const player2 = new Player();

let isPlayer1sTurn = 0;

newRoll.addEventListener('click', (e) => {
  // triggered by 'Roll Dice' button

  if (
    document.getElementById('cb1').disabled === true &&
    document.getElementById('cb2').disabled === true
  ) {
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
  }
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
    let playerPick = ['YELLOW', button.innerText];
    player1.currentPick(playerPick);
  })
);

p1GreenNumberSelected.forEach((button) =>
  // player 1's GREEN buttons
  button.addEventListener('click', () => {
    let playerPick = ['GREEN', button.innerText];
    player1.currentPick(playerPick);
  })
);

p1BlueNumberSelected.forEach((button) =>
  // player 1's BLUE buttons
  button.addEventListener('click', () => {
    let playerPick = ['BLUE', button.innerText];
    player1.currentPick(playerPick);
  })
);

// all coloured the buttons on player 2's board
p2RedNumberSelected.forEach((button) =>
  // player 2's RED buttons
  button.addEventListener('click', () => {
    let playerPick = ['RED', button.innerText];
    player2.currentPick(playerPick);
  })
);

p2YellowNumberSelected.forEach((button) =>
  // player 2's YELLOW buttons
  button.addEventListener('click', () => {
    let playerPick = ['YELLOW', button.innerText];
    player2.currentPick(playerPick);
  })
);

p2GreenNumberSelected.forEach((button) =>
  // player 2's GREEN buttons
  button.addEventListener('click', () => {
    let playerPick = ['GREEN', button.innerText];
    player2.currentPick(playerPick);
  })
);

p2BlueNumberSelected.forEach((button) =>
  // player 2's BLUE buttons
  button.addEventListener('click', () => {
    let playerPick = ['BLUE', button.innerText];
    player2.currentPick(playerPick);
  })
);

// Checkboxs
checkBox1.addEventListener('click', (e) => {
  // ensure the public checkbox is checked & disabled
  document.getElementById('cb1').disabled = true;
  document.getElementById('cb1').checked = true;

  // enable the colour checkbox
  document.getElementById('cb2').disabled = false;

  // construct all valid coloured options
  dice.constructValidIDButtons(isPlayer1sTurn);

  // disable all buttons
  dice.setAllButtonsToUnavailable();
  // display the numbers available to the player whose turn it's
  dice.updateAvailableNumbers(isPlayer1sTurn);
  // erase the public number for the player whose turn it is not
  dice.erasePublicNumber(isPlayer1sTurn);
});

checkBox2.addEventListener('click', (e) => {
  document.getElementById('cb2').disabled = true;
  document.getElementById('cb2').checked = true;

  // disable all buttons to reset the board
  dice.setAllButtonsToUnavailable();
  // the board is reset with all numbers reset to zero
  dice.cleanMiddleRow();
});
