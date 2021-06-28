import {
  dice,
  player1AvailableNumbers,
  player2AvailableNumbers,
} from './availableNumberIDs.js';

import { player1Buttons, player2Buttons } from './buttonIDs.js';

export default class Dice {
  constructor() {
    this.diceNumbers = [];
    this.availableNumbers = [];
    this.counter = 1;
    this.validButtonIDs = [];
    this.publicButtonIDs = [];
  }

  rollDice() {
    // reset numbers
    this.diceNumbers = [];
    this.availableNumbers = [];
    this.counter = 1;

    for (let i = 0; i < 6; i++) {
      // generate the 6 numbers to be used for the player's turn
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
      // use public dice 1
      this.availableNumbers[this.counter] =
        this.diceNumbers[0] + this.diceNumbers[i];
      // use public dice 2
      this.availableNumbers[this.counter + 1] =
        this.diceNumbers[1] + this.diceNumbers[i];

      this.counter += 2;
    }

    if (this.diceNumbers[0] === this.diceNumbers[1]) {
      // the 2 public dice are the same
      // eliminate the duplicate coloured available numbers
      for (let i = 1; i < 8; i += 2) {
        this.availableNumbers[i] = '—';
      }
    }
  }

  displayPublicNumber() {
    // display the public number for both players
    player1AvailableNumbers[0].innerHTML = this.availableNumbers[0];
    player2AvailableNumbers[0].innerHTML = this.availableNumbers[0];
  }

  generatePublicIDTags() {
    // generate all the valid public id tags
    let id = '';
    // initialize to empty the public ID's array
    this.publicButtonIDs = [];

    // player 1
    id = 'p1' + 'r' + this.availableNumbers[0];
    this.publicButtonIDs.push(id);
    id = 'p1' + 'y' + this.availableNumbers[0];
    this.publicButtonIDs.push(id);
    id = 'p1' + 'g' + this.availableNumbers[0];
    this.publicButtonIDs.push(id);
    id = 'p1' + 'b' + this.availableNumbers[0];
    this.publicButtonIDs.push(id);

    // player 2
    id = 'p2' + 'r' + this.availableNumbers[0];
    this.publicButtonIDs.push(id);
    id = 'p2' + 'y' + this.availableNumbers[0];
    this.publicButtonIDs.push(id);
    id = 'p2' + 'g' + this.availableNumbers[0];
    this.publicButtonIDs.push(id);
    id = 'p2' + 'b' + this.availableNumbers[0];
    this.publicButtonIDs.push(id);

    console.log(this.publicButtonIDs);
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

    if (this.diceNumbers[0] === this.diceNumbers[1]) {
      /* when the public numbers are duplicates, the first ID of every number
      ends with an emdash. The emdash IDs are not valid cause problems with
      other methods */

      for (let i = 1; i < this.availableNumbers.length; i += 2) {
        this.availableNumbers[i] = this.availableNumbers[i + 1];
      }
    }
  }

  setAllButtonsToUnavailable() {
    // initialize all the buttons on the board to unavailable
    for (let i = 0; i < player1Buttons.length; i++) {
      // player 1's buttons
      const elementID = player1Buttons[i];
      const element = document.getElementById(elementID);
      element.classList.remove('available');
      element.classList.add('notAvailable');
    }

    for (let i = 0; i < player2Buttons.length; i++) {
      // player 2's buttons
      const elementID = player2Buttons[i];
      const element = document.getElementById(elementID);
      element.classList.remove('available');
      element.classList.add('notAvailable');
    }
  }

  constructValidIDButtons(playerID) {
    // construct all the appropriate valid button ids

    // the playerID is 0 if it's player 2's turn
    // the ternary operator ensures the correct ID's are constructed
    playerID === 0 ? (playerID = 2) : (playerID = 1);

    this.counter = 0;
    let id = '';
    this.validButtonIDs = [];

    for (let i = 0; i < 9; i++) {
      switch (this.counter) {
        case 0:
          //the public number is available in all colours
          id = 'p' + playerID + 'r' + this.availableNumbers[0];
          this.validButtonIDs.push(id);
          id = 'p' + playerID + 'y' + this.availableNumbers[0];
          this.validButtonIDs.push(id);
          id = 'p' + playerID + 'g' + this.availableNumbers[0];
          this.validButtonIDs.push(id);
          id = 'p' + playerID + 'b' + this.availableNumbers[0];
          this.validButtonIDs.push(id);

          //move to red
          this.counter++;
          break;

        case 1:
        case 2:
          // construct the RED id numbers
          id = 'p' + playerID + 'r' + this.availableNumbers[1];
          this.validButtonIDs.push(id);
          id = 'p' + playerID + 'r' + this.availableNumbers[2];
          this.validButtonIDs.push(id);
          //move to yellow
          this.counter += 2;
          break;

        case 3:
        case 4:
          // construct the YELLOW id numbers
          id = 'p' + playerID + 'y' + this.availableNumbers[3];
          this.validButtonIDs.push(id);
          id = 'p' + playerID + 'y' + this.availableNumbers[4];
          this.validButtonIDs.push(id);
          //move to green
          this.counter += 2;
          break;

        case 5:
        case 6:
          // construct the GREEN id numbers
          id = 'p' + playerID + 'g' + this.availableNumbers[5];
          this.validButtonIDs.push(id);
          id = 'p' + playerID + 'g' + this.availableNumbers[6];
          this.validButtonIDs.push(id);
          //move to blue
          this.counter += 2;
          break;

        case 7:
        case 8:
          // construct the BLUE id numbers
          id = 'p' + playerID + 'b' + this.availableNumbers[7];
          this.validButtonIDs.push(id);
          id = 'p' + playerID + 'b' + this.availableNumbers[8];
          this.validButtonIDs.push(id);
          //terminate loop
          this.counter += 2;
          break;
      }
    }
  }

  constructValidPublicIDButtons() {
    // the public button IDs of the player who's turn it is not must be constructed
    let publicID = '';
    let publicIDStart = '';
    let publicIDEnd = '';
    // identify who's turn it is not
    const playerIDNumber = this.validButtonIDs[0][1] === '2' ? '1' : '2';

    for (let i = 0; i < 4; i++) {
      //the first 4 ID codes are the public numbers for the player who's turn it is
      // extract the 'p' from the ID
      publicIDStart = this.validButtonIDs[i].substring(0, 1);
      // extract the colour & button number
      publicIDEnd = this.validButtonIDs[i].substring(2);
      // reconstruct the button ID for 'other' player
      publicID = publicIDStart + playerIDNumber + publicIDEnd;
      this.validButtonIDs.push(publicID);
    }
  }

  enableValidButtons() {
    //turn on all buttons the user may access for the given turn
    for (let i = 0; i < this.validButtonIDs.length; i++) {
      let elementID = this.validButtonIDs[i];
      let element = document.getElementById(elementID);
      element.classList.remove('notAvailable');
      element.classList.add('available');
    }
  }
}
