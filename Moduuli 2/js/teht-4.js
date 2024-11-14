'use strict';

let numbers = []

while (true) {
    const input = prompt("Enter a number (enter 0 to stop):");
    const number = parseInt(input, 10);

    if (number === 0) {
        break;
    }
    numbers.push(number);
}

numbers.sort((a, b) => b - a);

console.log("Numbers from largest to smallest:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}