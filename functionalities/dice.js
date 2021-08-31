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
    this.lockedRows = [0, 0, 0, 0];
  }

  rollDice() {
    // method is called when user clicks 'Roll Dice'

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

    // allow user only to select the public checkbox by disabling the colour checkbox
    document.getElementById('cb1').disabled = false;
    document.getElementById('cb1').checked = false;
    document.getElementById('cb2').disabled = true;
    document.getElementById('cb2').checked = false;
  }

  publicNumber() {
    /* the public number is displayed, all necessary html id tags 
    are built & all 8 public numbers are set to available */

    // generate all the valid public id tags
    let id = '';
    // initialize to empty the public ID's array
    this.publicButtonIDs = [];
    let colours = ['r', 'y', 'g', 'b'];
    let playerNumber = 0;

    // display the public number for both players
    player1AvailableNumbers[0].innerHTML = this.availableNumbers[0];
    player2AvailableNumbers[0].innerHTML = this.availableNumbers[0];

    for (let i = 1; i < 3; i++) {
      // construct the html id tags for all the public numbers
      playerNumber = i;
      for (let j = 0; j < colours.length; j++) {
        id = 'p' + playerNumber + colours[j] + this.availableNumbers[0];
        this.publicButtonIDs.push(id);
      }
    }

    // set all 8 public numbers to available
    for (let i = 0; i < this.publicButtonIDs.length; i++) {
      let elementID = this.publicButtonIDs[i];
      let element = document.getElementById(elementID);
      document.getElementById(elementID).disabled = false;
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

    if (this.diceNumbers[0] === this.diceNumbers[1]) {
      /* when the public numbers are duplicates, the first ID of every number
      ends with an emdash. The emdash IDs are not valid cause problems with
      other methods */

      for (let i = 1; i < this.availableNumbers.length; i += 2) {
        this.availableNumbers[i] = this.availableNumbers[i + 1];
      }
    }

    for (let i = 0; i < this.validButtonIDs.length; i++) {
      // enable only the coloured number options

      if (this.validButtonIDs[i][3] !== '—') {
        // if both white dice are the same, every second coloured id tag ends with '-'
        let elementID = this.validButtonIDs[i];
        document.getElementById(elementID).disabled = false;
      }
    }
  }

  setAllButtonsToUnavailable() {
    // initialize all the buttons on the board to unavailable
    for (let i = 0; i < player1Buttons.length; i++) {
      // player 1's buttons
      const elementID = player1Buttons[i];
      const element = document.getElementById(elementID);
      element.setAttribute('disabled', 'disabled');
    }

    for (let i = 0; i < player2Buttons.length; i++) {
      // player 2's buttons
      const elementID = player2Buttons[i];
      const element = document.getElementById(elementID);
      element.setAttribute('disabled', 'disabled');
    }
  }

  disablePlayer1Buttons() {
    // initialize all the buttons on the board to unavailable
    for (let i = 0; i < player1Buttons.length; i++) {
      // player 1's buttons
      const elementID = player1Buttons[i];
      const element = document.getElementById(elementID);
      element.setAttribute('disabled', 'disabled');
    }
  }

  disablePlayer2Buttons() {
    // initialize all the buttons on the board to unavailable
    for (let i = 0; i < player2Buttons.length; i++) {
      // player 2's buttons
      const elementID = player2Buttons[i];
      const element = document.getElementById(elementID);
      element.setAttribute('disabled', 'disabled');
    }
  }

  disableAlreadySelectedButtons(playerNumber, colour, numbersSelected) {
    // disable buttons that users have already selected
    for (let i = 0; i < numbersSelected.length; i++) {
      // construct the player's buttons' IDs to be disabled
      const elementID = 'p' + playerNumber + colour + numbersSelected[i];
      const element = document.getElementById(elementID);
      element.setAttribute('disabled', 'disabled');
    }
  }

  constructValidIDButtons(playerID) {
    // construct all the appropriate valid button ids

    // the playerID is 0 if it's player 2's turn
    // the ternary operator ensures the correct ID's are constructed
    playerID === 0 ? (playerID = 2) : (playerID = 1);

    this.counter = 1;
    let id = '';
    this.validButtonIDs = [];

    for (let i = 0; i < 9; i++) {
      switch (this.counter) {
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

  cleanMiddleRow() {
    // wipe the middle row clean
    for (let i = 0; i < 9; i++) {
      player1AvailableNumbers[i].innerHTML = '—';
      player2AvailableNumbers[i].innerHTML = '—';
    }
  }

  erasePublicNumber(isPlayer1sTurn) {
    // erase the public for both players
    player1AvailableNumbers[0].innerHTML = '—';
    player2AvailableNumbers[0].innerHTML = '—';
  }

  lockrow(colourNumber, colour, numbersAlreadyTaken) {
    // determine if a row should be locked

    // the furtherest right number of red & yellow
    let furthestRightNumber = '12';

    if (colour === 'g' || colour === 'b') {
      // the furtherest right number of green & blue
      furthestRightNumber = '2';
    }

    let arraySize = numbersAlreadyTaken.length - 1;

    if (
      numbersAlreadyTaken.length >= 6 &&
      numbersAlreadyTaken[arraySize] === furthestRightNumber
    ) {
      // lock the row
      this.lockedRows[colourNumber] = 1;
    }
  }

  disableLockedRowButtons() {
    // disable all locked row buttons

    let colours = ['r', 'y', 'g', 'b'];

    for (let i = 0; i < this.lockedRows.length; i++) {
      if (this.lockedRows[i] === 1) {
        // used to generate all numbers in the row

        for (let number = 2; number < 12; number++) {
          // generate all numbers 2 through 12

          for (let j = 0; j < colours.length + 1; j++) {
            // construct all colours

            // construct the player 1's html element tag
            let element1ID = 'p1' + colours[j] + number;
            let disableElement = document.getElementById(element1ID);
            disableElement.setAttribute('disabled', 'disabled');

            // test
            console.log(element1ID);

            // construct the player 2's html element tag
            let element2ID = 'p2' + colours[j] + number;
            disableElement = document.getElementById(element2ID);
            disableElement.setAttribute('disabled', 'disabled');

            // test
            console.log(element2ID);
          }
        }
      }
    }
  }
}
