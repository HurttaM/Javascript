'use strict';

const numberInput = prompt("Please enter an integer:");
const number = parseInt(numberInput, 10);

let isPrime = true;


if (number <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
}

const resultMessage = isPrime ? `${number} is a prime number.` : `${number} is not a prime number.`;
document.getElementById("results").innerText = resultMessage;