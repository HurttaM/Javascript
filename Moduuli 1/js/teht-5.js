'use strict';

const yearInput = prompt("What year is it?");
const year = parseInt(yearInput);

let result;

if (year % 400 === 0) {
    result = `${year} is a leap year.`;
} else if (year % 100 === 0) {
    result = `${year} is not a leap year.`;
} else if (year % 4 === 0) {
    result = `${year} is a leap year.`;
} else {
    result = `${year} is not a leap year.`;
}

document.getElementById("results").innerText = result;