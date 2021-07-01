// const Colours = Object.freeze({
//   // enums for the math operations
//   RED: 0,
//   YELLOW: 1,
//   GREEN: 2,
//   BLUE: 3,
// });

const Colours = { RED: 0, YELLOW: 1, GREEN: 2, BLUE: 3 };

export default class Player {
  constructor() {
    // [Colour, Numerical Value]
    this.mostRecentPick = [];
    // [RED, YELLOW, GREEN, BLUE]
    this.totalNumberPicked = [0, 0, 0, 0];
    // all colours start as unlocked
    this.isLocked = [false, false, false, false];
    // all colours' numbers are initialized to available
    this.upperlimit = [1, 1, 13, 13];
    // indicates whose turn it is
    this.isTheirTurn = 0;
    // number of skipped turns a player has had
    this.skippedTurn = 0;
  }

  currentPick(playerPick) {
    // store the player's most recent pick
    // needed to check if a player should be assessed a 'skipped turn' strike

    this.mostRecentPick = [];
    this.mostRecentPick = playerPick;

    this.isValidPick();
  }

  isValidPick() {
    // ensure the number selected is to the right of the previous row's pick

    switch (this.mostRecentPick[0]) {
      case 'RED':
        // RED numbers increase when moving rightward
        if (this.mostRecentPick[1] > this.upperlimit[Colours.RED]) {
          // update the row's new upperlimit
          this.upperlimit[Colours.RED] = parseInt(this.mostRecentPick[1]);
        }
        break;

      case 'YELLOW':
        // YELLOW numbers increase when moving rightward
        if (this.mostRecentPick[1] > this.upperlimit[Colours.YELLOW]) {
          // update the row's new upperlimit
          this.upperlimit[Colours.YELLOW] = parseInt(this.mostRecentPick[1]);
        }
        break;

      case 'GREEN':
        // YELLOW numbers increase when moving rightward
        if (this.mostRecentPick[1] < this.upperlimit[Colours.GREEN]) {
          // update the row's new upperlimit
          this.upperlimit[Colours.GREEN] = parseInt(this.mostRecentPick[1]);
        }
        break;

      case 'BLUE':
        // YELLOW numbers increase when moving rightward
        if (this.mostRecentPick[1] < this.upperlimit[Colours.BLUE]) {
          // update the row's new upperlimit
          this.upperlimit[Colours.BLUE] = parseInt(this.mostRecentPick[1]);
        }
        break;
    }
  }
}
