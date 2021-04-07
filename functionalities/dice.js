import {
  // the dice numbers
  publicNumber1,
  publicNumber2,
  redDice,
  yellowDice,
  greenDice,
  blueDice,
} from './availableNumberIDs.js';

import {
  // the available numbers for player 1
  player1AvailablePublicNumber,
  player1AvailableRed1,
  player1AvailableRed2,
  player1AvailableYellow1,
  player1AvailableYellow2,
  player1AvailableGreen1,
  player1AvailableGreen2,
  player1AvailableBlue1,
  player1AvailableBlue2,
} from './availableNumberIDs.js';

import {
  // the available numbers for player 2
  player2AvailablePublicNumber,
  player2AvailableRed1,
  player2AvailableRed2,
  player2AvailableYellow1,
  player2AvailableYellow2,
  player2AvailableGreen1,
  player2AvailableGreen2,
  player2AvailableBlue1,
  player2AvailableBlue2,
} from './availableNumberIDs.js';

export default class Dice {
  constructor() {
    // initialize all numbers to zero
    this.publicNumber1 = 0;
    this.publicNumber2 = 0;
    this.redDice = 0;
    this.yellowDice = 0;
    this.greenDice = 0;
    this.blueDice = 0;
    this.player1AvailableNumbers = [];
    this.player2AvailableNumbers = [];
  }

  rollDice() {
    // wipe available numbers for BOTH players away
    this.player1AvailableNumbers = [];
    this.player2AvailableNumbers = [];

    // generate the random numbers for the dice
    this.publicNumber1 = Math.floor(Math.random() * 6) + 1;
    this.publicNumber2 = Math.floor(Math.random() * 6) + 1;
    this.redDice = Math.floor(Math.random() * 6) + 1;
    this.yellowDice = Math.floor(Math.random() * 6) + 1;
    this.greenDice = Math.floor(Math.random() * 6) + 1;
    this.blueDice = Math.floor(Math.random() * 6) + 1;

    //update the dice numbers on the user side
    publicNumber1.innerHTML = `${this.publicNumber1}`;
    publicNumber2.innerText = `${this.publicNumber2}`;
    redDice.innerText = `${this.redDice}`;
    yellowDice.innerText = `${this.yellowDice}`;
    greenDice.innerText = `${this.greenDice}`;
    blueDice.innerText = `${this.blueDice}`;
  }

  player1sTurn() {
    // update Player 2's numbers
    player2AvailablePublicNumber.innerHTML =
      this.publicNumber1 + this.publicNumber2;
    // store public number available to player 2
    this.storeAvailableNumbers(
      this.player2AvailableNumbers,
      'public',
      this.publicNumber1 + this.publicNumber2
    );

    player2AvailableRed1.innerHTML = '—';
    player2AvailableRed2.innerHTML = '—';
    player2AvailableYellow1.innerHTML = '—';
    player2AvailableYellow2.innerHTML = '—';
    player2AvailableGreen1.innerHTML = '—';
    player2AvailableGreen2.innerHTML = '—';
    player2AvailableBlue1.innerHTML = '—';
    player2AvailableBlue2.innerHTML = '—';

    //Player 1 update the available number display
    player1AvailablePublicNumber.innerHTML =
      this.publicNumber1 + this.publicNumber2;
    player1AvailableRed1.innerHTML = this.publicNumber1 + this.redDice;
    player1AvailableRed2.innerHTML = this.publicNumber2 + this.redDice;
    player1AvailableYellow1.innerHTML = this.publicNumber1 + this.yellowDice;
    player1AvailableYellow2.innerHTML = this.publicNumber2 + this.yellowDice;
    player1AvailableGreen1.innerHTML = this.publicNumber1 + this.greenDice;
    player1AvailableGreen2.innerHTML = this.publicNumber2 + this.greenDice;
    player1AvailableBlue1.innerHTML = this.publicNumber1 + this.blueDice;
    player1AvailableBlue2.innerHTML = this.publicNumber2 + this.blueDice;

    // store numbers available to player 1
    // public number
    this.storeAvailableNumbers(
      this.player1AvailableNumbers,
      'public',
      this.publicNumber1 + this.publicNumber2
    );

    // RED numbers
    this.storeAvailableNumbers(
      this.player1AvailableNumbers,
      'red',
      this.publicNumber1 + this.redDice
    );
    this.storeAvailableNumbers(
      this.player1AvailableNumbers,
      'red',
      this.publicNumber2 + this.redDice
    );

    // YELLOW numbers
    this.storeAvailableNumbers(
      this.player1AvailableNumbers,
      'yellow',
      this.publicNumber1 + this.yellowDice
    );
    this.storeAvailableNumbers(
      this.player1AvailableNumbers,
      'yellow',
      this.publicNumber2 + this.yellowDice
    );

    // GREEN numbers
    this.storeAvailableNumbers(
      this.player1AvailableNumbers,
      'green',
      this.publicNumber1 + this.greenDice
    );
    this.storeAvailableNumbers(
      this.player1AvailableNumbers,
      'green',
      this.publicNumber2 + this.greenDice
    );

    // BLUE numbers
    this.storeAvailableNumbers(
      this.player1AvailableNumbers,
      'blue',
      this.publicNumber1 + this.blueDice
    );
    this.storeAvailableNumbers(
      this.player1AvailableNumbers,
      'blue',
      this.publicNumber2 + this.blueDice
    );

    if (this.publicNumber1 == this.publicNumber2) {
      // the 2 public numbers are the same
      player1AvailableRed1.innerHTML = '—';
      player1AvailableYellow1.innerHTML = '—';
      player1AvailableGreen1.innerHTML = '—';
      player1AvailableBlue1.innerHTML = '—';

      return;
    }
  }

  player2sTurn() {
    // update Player 2's numbers
    player1AvailablePublicNumber.innerHTML =
      this.publicNumber1 + this.publicNumber2;
    player1AvailableRed1.innerHTML = '—';
    player1AvailableRed2.innerHTML = '—';
    player1AvailableYellow1.innerHTML = '—';
    player1AvailableYellow2.innerHTML = '—';
    player1AvailableGreen1.innerHTML = '—';
    player1AvailableGreen2.innerHTML = '—';
    player1AvailableBlue1.innerHTML = '—';
    player1AvailableBlue2.innerHTML = '—';

    //Player 1 update the available number display
    player2AvailablePublicNumber.innerHTML =
      this.publicNumber1 + this.publicNumber2;
    player2AvailableRed1.innerHTML = this.publicNumber1 + this.redDice;
    player2AvailableRed2.innerHTML = this.publicNumber2 + this.redDice;
    player2AvailableYellow1.innerHTML = this.publicNumber1 + this.yellowDice;
    player2AvailableYellow2.innerHTML = this.publicNumber2 + this.yellowDice;
    player2AvailableGreen1.innerHTML = this.publicNumber1 + this.greenDice;
    player2AvailableGreen2.innerHTML = this.publicNumber2 + this.greenDice;
    player2AvailableBlue1.innerHTML = this.publicNumber1 + this.blueDice;
    player2AvailableBlue2.innerHTML = this.publicNumber2 + this.blueDice;

    // store numbers available to player 1
    // public number
    this.storeAvailableNumbers(
      this.player1AvailableNumbers,
      'public',
      this.publicNumber1 + this.publicNumber2
    );

    // store numbers available to player 2
    // public number
    this.storeAvailableNumbers(
      this.player2AvailableNumbers,
      'public',
      this.publicNumber1 + this.publicNumber2
    );

    // RED numbers
    this.storeAvailableNumbers(
      this.player2AvailableNumbers,
      'red',
      this.publicNumber1 + this.redDice
    );
    this.storeAvailableNumbers(
      this.player2AvailableNumbers,
      'red',
      this.publicNumber2 + this.redDice
    );

    // YELLOW numbers
    this.storeAvailableNumbers(
      this.player2AvailableNumbers,
      'yellow',
      this.publicNumber1 + this.yellowDice
    );
    this.storeAvailableNumbers(
      this.player2AvailableNumbers,
      'yellow',
      this.publicNumber2 + this.yellowDice
    );

    // GREEN numbers
    this.storeAvailableNumbers(
      this.player2AvailableNumbers,
      'green',
      this.publicNumber1 + this.greenDice
    );
    this.storeAvailableNumbers(
      this.player2AvailableNumbers,
      'green',
      this.publicNumber2 + this.greenDice
    );

    // BLUE numbers
    this.storeAvailableNumbers(
      this.player2AvailableNumbers,
      'blue',
      this.publicNumber1 + this.blueDice
    );
    this.storeAvailableNumbers(
      this.player2AvailableNumbers,
      'blue',
      this.publicNumber2 + this.blueDice
    );

    if (this.publicNumber1 == this.publicNumber2) {
      // the 2 public numbers are the same
      player2AvailableRed1.innerHTML = '—';
      player2AvailableYellow1.innerHTML = '—';
      player2AvailableGreen1.innerHTML = '—';
      player2AvailableBlue1.innerHTML = '—';

      return;
    }
  }

  setAllButtonsToUnavailable(arrButtonsIDs) {
    // initialize all the buttons on the board to unavailable
    for (let i = 0; i < 11; i++) {
      let elementID = arrButtonsIDs[i];
      var element = document.getElementById(elementID);
      element.classList.remove('available');
      element.classList.add('notAvailable');
    }
  }

  storeAvailableNumbers(arrPlayer, colour, buttonNumber) {
    // store the available numbers in an array
    arrPlayer.push(colour);
    arrPlayer.push(buttonNumber);
  }

  enableValidButtons(playerIDNumber, arrPlayer) {
    // enable all allowable numbers
    let id = '';
    let arrID = [];
    for (let i = 0; i < arrPlayer.length; i += 2) {
      // construct the html IDs of available numbers
      switch (arrPlayer[i]) {
        case 'public':
          id = 'p' + playerIDNumber + 'r' + arrPlayer[i + 1];
          arrID.push(id);
          id = 'p' + playerIDNumber + 'y' + arrPlayer[i + 1];
          arrID.push(id);
          id = 'p' + playerIDNumber + 'g' + arrPlayer[i + 1];
          arrID.push(id);
          id = 'p' + playerIDNumber + 'b' + arrPlayer[i + 1];
          arrID.push(id);
          break;

        case 'red':
          id = 'p' + playerIDNumber + 'r' + arrPlayer[i + 1];
          arrID.push(id);
          break;

        case 'yellow':
          id = 'p' + playerIDNumber + 'y' + arrPlayer[i + 1];
          arrID.push(id);
          break;

        case 'green':
          id = 'p' + playerIDNumber + 'g' + arrPlayer[i + 1];
          arrID.push(id);
          break;

        case 'blue':
          id = 'p' + playerIDNumber + 'b' + arrPlayer[i + 1];
          arrID.push(id);
          break;
      }
    }

    for (let i = 0; i < arrID.length; i++) {
      // enable all available buttons
      let elementID = arrID[i];
      var element = document.getElementById(elementID);
      element.classList.remove('notAvailable');
      element.classList.add('available');
    }
  }
}
