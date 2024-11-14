'use strict';

let participants = [];

function participant(amount) {
    for (let i = 0; i < amount; i++) {
        const name = prompt('Give a name of a participant');
        participants.push(name);
    }
}


const number = parseInt(prompt('How many participants?'), 10);

participant(number);

participants.sort();

let List = "<ol>";
for (let i = 0; i < participants.length; i++) {
    List += `<li>${participants[i]}</li>`;
}
List += "</ol>";

document.getElementById("results").innerHTML = List;