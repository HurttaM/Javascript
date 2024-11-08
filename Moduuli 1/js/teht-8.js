'use strict';

const firstYear = parseInt(prompt("Enter the first year:"), 10);
const finalYear = parseInt(prompt("Enter the final year:"), 10);

let leapList = "<ul>";

for (let year = firstYear; year <= finalYear; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        leapList += `<li>${year}</li>`;
    }
}

leapList += "</ul>";

document.getElementById("results").innerHTML = leapList;