'use strict';

//etsitään tuloskohta html-sivulta
const tulostus =
    document.querySelector('#TulosAlue');


// luodaan tyhjä taulukko/lista lukuja varten
let luvut = []

//kysytään käyttäjältä arvot ja lisään ne listaan
for (let i = 0; i < 5; i++) {
    let arvo =
        +prompt("Anna kokonaisluku: ")
    luvut.push(arvo)
}

tulostus.innerHTML =
    `Tulostetaan taulukon arvot for-toistolla <br>`

for (let i = 0; i < luvut.length; i++) {
    tulostus.innerHTML += `${luvut[i]} <br>`;
}

tulostus.innerHTML = 'Lajitellaan numerot suurusjärjestykseen <br>';

luvut.sort((a, b) => a - b);

tulostus.innerHTML += `Luvut tulostetaan for .. of -toistolla`
for (let arvo of luvut) {
    tulostus.innerHTML += `${arvo} <br>`;
}