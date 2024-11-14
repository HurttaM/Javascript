'use strict';

let dogs = [];

function doggo(times) {
    for (let i = 0; i < times; i++) {
        const name = prompt('Give a name of a dog')
        dogs.push(name)
    }
}

doggo(6)

dogs.sort();
dogs.reverse();

let dogList = "<ul>";
for (let i = 0; i < dogs.length; i++) {
    dogList += `<li>${dogs[i]}</li>`;
}
dogList += "</ul>";

document.getElementById("results").innerHTML = dogList;

