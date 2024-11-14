'use strict';

let numbers = []

while (true) {
    const input = prompt("Enter a number (enter 0 to stop):");
    const number = parseInt(input, 10);

    if  (numbers.includes(number)){
        console.log(`The number ${number} has already been given.`);
        break;
    }
    numbers.push(number);
}

numbers.sort((a, b) => b - a);

console.log("Numbers in ascending order:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}