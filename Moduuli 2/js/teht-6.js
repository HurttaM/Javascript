'use strict';

function roll() {
    return Math.floor(Math.random() * 6) + 1;
}

let results = []

while (true) {
    const dice = roll()
    results.push(dice)

    if (roll === 6) {
        break
    }

}

let listHTML = "<ul>";
for (let i = 0; i < results.length; i++) {
    listHTML += `<li>Roll ${i + 1}: ${results[i]}</li>`;
}
listHTML += "</ul>";

document.getElementById("results").innerHTML = listHTML;