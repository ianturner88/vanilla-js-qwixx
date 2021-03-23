import Dice from './functionalities/dice.js';

const newRoll = document.querySelector('[data-roll-dice]');

const dice = new Dice();

newRoll.addEventListener('click', (e) => {
  dice.rollDice();
});
