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

const subtractInputX = document.getElementById('xsubtract');
const subtractInputY = document.getElementById('ysubtract');
const subtractButton = document.getElementById('calculate-subtract');
const subtractResult = document.getElementById('result-subtract');

const multiplyInputX = document.getElementById('xmultiply');
const multiplyInputY = document.getElementById('ymultiply');
const multiplyButton = document.getElementById('calculate-multiply');
const multiplyResult = document.getElementById('result-multiply');

const divideInputX = document.getElementById('xdivide');
const divideInputY = document.getElementById('ydivide');
const divideButton = document.getElementById('calculate-divide');
const divideResult = document.getElementById('result-divide');
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
    const result = subtract(numberInputX, numberInputY);
    subtractResult.textContent = result;
});

multiplyButton.addEventListener('click', () => {
    const numberInputX = Number(multiplyInputX.value);
    const numberInputY = Number(multiplyInputY.value);
    const result = multiply(numberInputX, numberInputY);
    multiplyResult.textContent = result;
});

divideButton.addEventListener('click', () => {
    const numberInputX = Number(divideInputX.value);
    const numberInputY = Number(divideInputY.value);
    const result = divide(numberInputX, numberInputY);
    divideResult.textContent = result; 
});
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)
