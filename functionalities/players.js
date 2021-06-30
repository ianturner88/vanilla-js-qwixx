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
    console.log(playerPick);
  }
}
