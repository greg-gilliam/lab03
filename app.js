// import functions
import { add } from './calculations.js';
import { subtract } from './calculations.js';
import { multiply } from './calculations.js';
import { divide } from './calculations.js';

// reference needed DOM elements
const additionInputX = document.getElementById('x');
const additionInputY = document.getElementById('y');
const additionButton = document.getElementById('calculate-addition');
const additionResult = document.getElementById('result-addition');

const subtractInputX = document.getElementById('x');
const subtractInputY = document.getElementById('y');
const subtractButton = document.getElementById('calculate-subtract');
const subtractResult = document.getElementById(result-subtract);

const multiplyInputX = document.getElementById('x');
const multiplyInputY = document.getElementById('y');
const mutliplyButton = document.getElementById('calculate-multiply');
const multiplyResult = document.getElementById(result-multiply);

const divideInputX = document.getElementById('x');
const divideInputY = document.getElementById('y');
const divideButton = document.getElementById('calculate-divide');
consst divideResult = document.getElementById(result-divide);
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
  const subtract = subtract(numberInputX, numberInputY);
  subtractResult.textContent = subtract;
})

multiplyButton.addEventListener('click', () => {
  const numberInputX = Number(multiplyInputX.value);
  const numberInputY = Number(multiplyInputY.value);
  const multiply = multiply(numberInputX, numberInputY);
  multiplyResult.textContent = multiply;
})

divideButton.addEventListener('click', () => {
  const numberInputX = Number(divideInputX.value);
  const numberInputY = Number(divideInputY.value);
  const divide = divide (numberInputX, numberInputY);
  divideResult.textContent = divide; 
})
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)
