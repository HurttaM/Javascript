'use strict';

const form = document.getElementById("source");
const targetParagraph = document.getElementById("target");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const firstName = document.querySelector('input[name="firstname"]').value.trim();
    const lastName = document.querySelector('input[name="lastname"]').value.trim();

    if (firstName && lastName) {
        targetParagraph.textContent = `Your name is ${firstName} ${lastName}`;
    } else {
        targetParagraph.textContent = "Please enter both your first and last name.";
    }
});