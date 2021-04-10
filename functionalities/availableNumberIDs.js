// the 6 dice
const publicNumber1 = document.querySelector('[data-public-dice-1]');
const publicNumber2 = document.querySelector('[data-public-dice-2]');
const redDice = document.querySelector('[data-red-dice]');
const yellowDice = document.querySelector('[data-yellow-dice]');
const greenDice = document.querySelector('[data-green-dice]');
const blueDice = document.querySelector('[data-blue-dice]');

let dice = [
  // the dice
  publicNumber1,
  publicNumber2,
  redDice,
  yellowDice,
  greenDice,
  blueDice,
];

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

let player1AvailableNumbers = [
  // player 1's available numbers
  player1AvailablePublicNumber,
  player1AvailableRed1,
  player1AvailableRed2,
  player1AvailableYellow1,
  player1AvailableYellow2,
  player1AvailableGreen1,
  player1AvailableGreen2,
  player1AvailableBlue1,
  player1AvailableBlue2,
];

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

let player2AvailableNumbers = [
  // player 2's available numbers
  player2AvailablePublicNumber,
  player2AvailableRed1,
  player2AvailableRed2,
  player2AvailableYellow1,
  player2AvailableYellow2,
  player2AvailableGreen1,
  player2AvailableGreen2,
  player2AvailableBlue1,
  player2AvailableBlue2,
];

export { dice, player1AvailableNumbers, player2AvailableNumbers };
