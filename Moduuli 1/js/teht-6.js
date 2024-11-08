'use strict';

const calculate = confirm("Should I calculate the square root?");

if (calculate) {
    const numberInput = prompt("Please enter a number:");
    const number = parseFloat(numberInput);

    if (number < 0) {
        document.getElementById("results").innerText = "The square root of a negative number is not defined.";
    } else {
        const squareRoot = Math.sqrt(number);
        document.getElementById("results").innerText = `The square root of ${number} is ${squareRoot}.`;
    }
}

else {
    document.getElementById("results").innerText = "The square root is not calculated.";
}