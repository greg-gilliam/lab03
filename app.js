// import functions
import { add } from './calculations.js';
import { subtract } from './calculations.js';
// reference needed DOM elements
const additionInputX = document.getElementById('x');
const additionInputY = document.getElementById('y');
const additionButton = document.getElementById('calculate-addition');
const additionResult = document.getElementById('result-addition');

const subtractInputX = document.getElementById('x');
const subtractInputY = document.getElementById('y');
const subtractButton = document.getElementById('calculate-subtract');
const subtractResult = document.getElementById(result-subtract);

// set event listeners 
additionButton.addEventListener('click', () => {
  const numberInputX = Number(additionInputX.value); 
  const numberInputY = Number(additionInputY.value);
const sum = add(numberInputX, numberInputY);
additionResult.textContent = sum; 
});

subtractButton.addEventListener('click', () => {
  const numberInputX = Number(subtractInputX.value);
  const numberInputY = Number(subtractInputY.value);
  const sum = subtract(numberInputX, numberInputY);
  subtractResult.textContent = subtract;
})
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)
