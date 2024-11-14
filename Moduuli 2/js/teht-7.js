'use strict';

function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

const sides = parseInt(prompt("Enter the number of sides on the dice: "), 10);

let results = [];

while (true) {
    const roll = rollDice(sides);
    results.push(roll);

    if (roll === sides) {
        break;
    }
}


let listHTML = "<ul>";
for (let i = 0; i < results.length; i++) {
    listHTML += `<li>Roll ${i + 1}: ${results[i]}</li>`;
}
listHTML += "</ul>";

document.getElementById("results").innerHTML = listHTML;