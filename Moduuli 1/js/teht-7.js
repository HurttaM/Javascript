'use strict';

const number = parseInt(prompt("How many dice do you want to roll?"), 10);

let sum = 0;

for (let i = 0; i < number; i++) {
    const roll = Math.floor(Math.random() * 6) + 1;
    sum += roll;
}

document.getElementById("results").innerText = `The sum of the dice rolls is: ${sum}.`;

