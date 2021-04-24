export default class Player {
  constructor() {
    // [Colour, Numerical Value]
    this.mostRecentPick = [];
    // [RED, YELLOW, GREEN, BLUE]
    this.numberPicked = [];
    // all colours start as unlocked
    this.isLocked = [false, false, false, false];
  }

  addXClass(arrValidNumbers) {}
}
