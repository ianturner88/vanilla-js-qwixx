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

// ROLL DICE
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

    // set the number of user selections for the turn to 0
    player1.isSkippedTurn = 0;
    player2.isSkippedTurn = 0;

    // generate 6 random numbers, display dice numbers, and construct available numbers
    dice.rollDice();
    // set all buttons to unavailable
    dice.setAllButtonsToUnavailable();
    // public number displayed & id tags generated
    dice.publicNumber();

    // disable all buttons player 1 has already selected
    dice.disableAlreadySelectedButtons(1, 'r', player1.numbersAlreadyTaken[0]);
    dice.disableAlreadySelectedButtons(1, 'y', player1.numbersAlreadyTaken[1]);
    dice.disableAlreadySelectedButtons(1, 'g', player1.numbersAlreadyTaken[2]);
    dice.disableAlreadySelectedButtons(1, 'b', player1.numbersAlreadyTaken[3]);

    // disable all buttons player 2 has already selected
    dice.disableAlreadySelectedButtons(2, 'r', player2.numbersAlreadyTaken[0]);
    dice.disableAlreadySelectedButtons(2, 'y', player2.numbersAlreadyTaken[1]);
    dice.disableAlreadySelectedButtons(2, 'g', player2.numbersAlreadyTaken[2]);
    dice.disableAlreadySelectedButtons(2, 'b', player2.numbersAlreadyTaken[3]);
  }
});

// PLAYER 1'S COLOURED BUTTONS
p1RedNumberSelected.forEach((button) =>
  // player 1's RED buttons
  button.addEventListener('click', () => {
    let playerPick = ['RED', button.innerText, '1'];
    player1.currentPick(playerPick);
    // increment to note a player made a selection
    player1.isSkippedTurn++;
    // disable player 1's board
    dice.disablePlayer1Buttons();
    // store the numbers selected by the player
    player1.numbersAlreadyTaken[0].push(playerPick[1]);
  })
);

p1YellowNumberSelected.forEach((button) =>
  // player 1's YELLOW buttons
  button.addEventListener('click', () => {
    let playerPick = ['YELLOW', button.innerText, '1'];
    player1.currentPick(playerPick);
    // increment to note a player made a selection
    player1.isSkippedTurn++;
    // disable player 1's board
    dice.disablePlayer1Buttons();
    // store the numbers selected by the player
    player1.numbersAlreadyTaken[1].push(playerPick[1]);
  })
);

p1GreenNumberSelected.forEach((button) =>
  // player 1's GREEN buttons
  button.addEventListener('click', () => {
    let playerPick = ['GREEN', button.innerText, '1'];
    player1.currentPick(playerPick);
    // increment to note a player made a selection
    player1.isSkippedTurn++;
    // disable player 1's board
    dice.disablePlayer1Buttons();
    // store the numbers selected by the player
    player1.numbersAlreadyTaken[2].push(playerPick[1]);
  })
);

p1BlueNumberSelected.forEach((button) =>
  // player 1's BLUE buttons
  button.addEventListener('click', () => {
    let playerPick = ['BLUE', button.innerText, '1'];
    player1.currentPick(playerPick);
    // increment to note a player made a selection
    player1.isSkippedTurn++;
    // disable player 1's board
    dice.disablePlayer1Buttons();
    // store the numbers selected by the player
    player1.numbersAlreadyTaken[3].push(playerPick[1]);
  })
);

// PLAYER 2'S COLOURED BUTTONS
p2RedNumberSelected.forEach((button) =>
  // player 2's RED buttons
  button.addEventListener('click', () => {
    let playerPick = ['RED', button.innerText, '2'];
    player2.currentPick(playerPick);
    // increment to note a player made a selection
    player2.isSkippedTurn++;
    // disable player 2's board
    dice.disablePlayer2Buttons();
    // store the numbers selected by the player
    player2.numbersAlreadyTaken[0].push(playerPick[1]);
  })
);

p2YellowNumberSelected.forEach((button) =>
  // player 2's YELLOW buttons
  button.addEventListener('click', () => {
    let playerPick = ['YELLOW', button.innerText, '2'];
    player2.currentPick(playerPick);
    // increment to note a player made a selection
    player2.isSkippedTurn++;
    // disable player 2's board
    dice.disablePlayer2Buttons();
    // store the numbers selected by the player
    player2.numbersAlreadyTaken[1].push(playerPick[1]);
  })
);

p2GreenNumberSelected.forEach((button) =>
  // player 2's GREEN buttons
  button.addEventListener('click', () => {
    let playerPick = ['GREEN', button.innerText, '2'];
    player2.currentPick(playerPick);
    // increment to note a player made a selection
    player2.isSkippedTurn++;
    // disable player 2's board
    dice.disablePlayer2Buttons();
    // store the numbers selected by the player
    player2.numbersAlreadyTaken[2].push(playerPick[1]);
  })
);

p2BlueNumberSelected.forEach((button) =>
  // player 2's BLUE buttons
  button.addEventListener('click', () => {
    let playerPick = ['BLUE', button.innerText, '2'];
    player2.currentPick(playerPick);
    // increment to note a player made a selection
    player2.isSkippedTurn++;
    // disable player 2's board
    dice.disablePlayer2Buttons();
    // store the numbers selected by the player
    player2.numbersAlreadyTaken[3].push(playerPick[1]);
  })
);

// CHECKBOXES
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

  dice.lockrow(0, 'r', player1.numbersAlreadyTaken[0]);
  dice.lockrow(1, 'y', player1.numbersAlreadyTaken[1]);
  dice.lockrow(2, 'g', player1.numbersAlreadyTaken[2]);
  dice.lockrow(3, 'b', player1.numbersAlreadyTaken[3]);

  dice.lockrow(0, 'r', player2.numbersAlreadyTaken[0]);
  dice.lockrow(1, 'y', player2.numbersAlreadyTaken[1]);
  dice.lockrow(2, 'g', player2.numbersAlreadyTaken[2]);
  dice.lockrow(3, 'b', player2.numbersAlreadyTaken[3]);
});

checkBox2.addEventListener('click', (e) => {
  document.getElementById('cb2').disabled = true;
  document.getElementById('cb2').checked = true;

  // disable all buttons to reset the board
  dice.setAllButtonsToUnavailable();
  // the board is reset with all numbers reset to zero
  dice.cleanMiddleRow();

  if (isPlayer1sTurn === 1 && player1.isSkippedTurn === 0) {
    // assess player 1 a SKIPPED TURN b/c no selection was made on their turn
    // construct HTML element tag
    let element = 'p1pbl' + (player1.numberOfSkippedTurns + 1);
    let elementHTMLTag = document.getElementById(element);
    elementHTMLTag.classList.add('xSkippedTurn');

    // increment the number of skipped turn penalties a player has
    player1.numberOfSkippedTurns++;
  }

  if (isPlayer1sTurn === 0 && player2.isSkippedTurn === 0) {
    // assess player 2 a SKIPPED TURN b/c no selection was made on their turn
    // construct HTML element tag
    let element = 'p2pbl' + (player2.numberOfSkippedTurns + 1);
    let elementHTMLTag = document.getElementById(element);
    elementHTMLTag.classList.add('xSkippedTurn');

    // increment the number of skipped turn penalties a player has
    player2.numberOfSkippedTurns++;
  }

  dice.lockrow(0, 'r', player1.numbersAlreadyTaken[0]);
  dice.lockrow(1, 'y', player1.numbersAlreadyTaken[1]);
  dice.lockrow(2, 'g', player1.numbersAlreadyTaken[2]);
  dice.lockrow(3, 'b', player1.numbersAlreadyTaken[3]);

  dice.lockrow(0, 'r', player2.numbersAlreadyTaken[0]);
  dice.lockrow(1, 'y', player2.numbersAlreadyTaken[1]);
  dice.lockrow(2, 'g', player2.numbersAlreadyTaken[2]);
  dice.lockrow(3, 'b', player2.numbersAlreadyTaken[3]);
});
