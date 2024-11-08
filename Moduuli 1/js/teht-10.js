'use strict';

const numberOfDice = parseInt(prompt("Enter the number of dice:"), 10);
const desiredSum = parseInt(prompt("Enter the desired sum of the eyes:"), 10);
const simulations = 10000;
let successCount = 0;

for (let i = 0; i < simulations; i++) {
    let currentSum = 0;

    for (let j = 0; j < numberOfDice; j++) {
        currentSum += Math.floor(Math.random() * 6) + 1; // Roll a die (1-6)
    }

    if (currentSum === desiredSum) {
        successCount++;
    }
}

const probability = (successCount / simulations) * 100;

document.getElementById("results").innerText =
    `Probability to get sum ${desiredSum} with ${numberOfDice} dice is ${probability.toFixed(2)}%.`;