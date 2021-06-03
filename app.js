// import functions
import { add } from './calculations.js';
// reference needed DOM elements
const additionInputX = document.getElementById('x');
const additionInputY = document.getElementById('y');
const additionButton = document.getElementById('calculate-addition');
const additionResult = document.getElementById('result-addition');

// set event listeners 
additionButton.addEventListener('click', () => {
  const numberInputX = Number(additionInputX.value); 
  const numberInputY = Number(additionInputY.value);
const sum = add(numberInputX, numberInputY);
additionResult.textContent = sum; 
});
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)
