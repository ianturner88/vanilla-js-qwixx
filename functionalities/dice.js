function dice() {
  // generate random numbers for the dice

  let counter = 0;

  while (counter < 100) {
    // creates a nice visual effect of the dice numbers changing
    let test = Math.floor(Math.random() * 6) + 1;
    counter++;
  }
}
