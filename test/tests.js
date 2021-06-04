// IMPORT MODULES under test here:
// import { add } from '../calculator.js';

import { add } from '../calculations.js';

const test = QUnit.test;

test('add function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 5;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = add(2, 3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

import { subtract } from '../calculation.js';
const test = QUnit.test;

test('subtract function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 5;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = subtract(2, 3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

