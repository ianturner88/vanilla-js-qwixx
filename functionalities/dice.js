// the 6 dice
const publicNumber1 = document.querySelector('[data-public-dice-1]');
const publicNumber2 = document.querySelector('[data-public-dice-2]');
const redDice = document.querySelector('[data-red-dice]');
const yellowDice = document.querySelector('[data-yellow-dice]');
const greenDice = document.querySelector('[data-green-dice]');
const blueDice = document.querySelector('[data-blue-dice]');

// player 1's 9 available numbers
const player1AvailablePublicNumber = document.querySelector(
  '[data-player-1-available-white]'
);
const player1AvailableRed1 = document.querySelector(
  '[data-player-1-available-red-1]'
);
const player1AvailableRed2 = document.querySelector(
  '[data-player-1-available-red-2]'
);
const player1AvailableYellow1 = document.querySelector(
  '[data-player-1-available-yellow-1]'
);
const player1AvailableYellow2 = document.querySelector(
  '[data-player-1-available-yellow-2]'
);
const player1AvailableGreen1 = document.querySelector(
  '[data-player-1-available-green-1]'
);
const player1AvailableGreen2 = document.querySelector(
  '[data-player-1-available-green-2]'
);
const player1AvailableBlue1 = document.querySelector(
  '[data-player-1-available-blue-1]'
);
const player1AvailableBlue2 = document.querySelector(
  '[data-player-1-available-blue-2]'
);

// player 2's 9 available numbers
const player2AvailablePublicNumber = document.querySelector(
  '[data-player-2-available-white]'
);
const player2AvailableRed1 = document.querySelector(
  '[data-player-2-available-red-1]'
);
const player2AvailableRed2 = document.querySelector(
  '[data-player-2-available-red-2]'
);
const player2AvailableYellow1 = document.querySelector(
  '[data-player-2-available-yellow-1]'
);
const player2AvailableYellow2 = document.querySelector(
  '[data-player-2-available-yellow-2]'
);
const player2AvailableGreen1 = document.querySelector(
  '[data-player-2-available-green-1]'
);
const player2AvailableGreen2 = document.querySelector(
  '[data-player-2-available-green-2]'
);
const player2AvailableBlue1 = document.querySelector(
  '[data-player-2-available-blue-1]'
);
const player2AvailableBlue2 = document.querySelector(
  '[data-player-2-available-blue-2]'
);

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
    for (let i = 0; i < arrPlayer.length; i += 2) {
      //test
      const test = arrPlayer[i];
      const test1 = typeof test;
      const test2 = arrPlayer[i + 1];
      const test3 = typeof test2;
      const test4 = playerIDNumber;
      const test5 = typeof test4;

      switch (arrPlayer[i]) {
        case 'public':
          id = 'p' + playerIDNumber + 'r' + arrPlayer[i + 1];
          id = 'p' + playerIDNumber + 'y' + arrPlayer[i + 1];
          id = 'p' + playerIDNumber + 'g' + arrPlayer[i + 1];
          id = 'p' + playerIDNumber + 'b' + arrPlayer[i + 1];
          break;

        case 'red':
          id = 'p' + playerIDNumber + 'r' + arrPlayer[i + 1];
          break;

        case 'yellow':
          id = 'p' + playerIDNumber + 'y' + arrPlayer[i + 1];
          break;

        case 'green':
          id = 'p' + playerIDNumber + 'g' + arrPlayer[i + 1];
          break;

        case 'blue':
          id = 'p' + playerIDNumber + 'b' + arrPlayer[i + 1];
          break;
      }
    }
  }
}
