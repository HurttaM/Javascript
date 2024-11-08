'use strict';

const num1 = Number(prompt("Give a number:"));
const num2 = Number(prompt("Give second number:"));
const num3 = Number(prompt("Give third number:"));

const sum = num1 + num2 + num3;
const product = num1 * num2 * num3;
const average = sum / 3;

document.getElementById("sum").innerText = "The sum of the numbers is: " + sum;
document.getElementById("product").innerText = "The product of the numbers is: " + product;
document.getElementById("average").innerText = "The average of the numbers is: " + average;