'use strict';

const number = parseInt(prompt("How many dice do you want to roll?"), 10);
const desiredsum = parseInt(prompt("What is the desired sum?"));
const simulations = 1000;
let success = 0;

for (let i = 0; i < simulations; i++) {
    let current = 0;


for (let dice = 0; dice < number; dice++) {
    current += Math.floor(Math.random() * 6) + 1;
}

if (current === desiredsum) {
    success++;
}
}

const probability = (success / simulations) * 100;

document.getElementById('results').innerText = `The probability to get sum ${desiredsum} with ${number} of dice is ${probability.toFixed(2)}%.`;