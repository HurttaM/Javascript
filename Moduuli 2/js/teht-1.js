'use strict';

let numbers = [];

function number(times) {
    for (let i = 0; i < times; i++) {
        const num = prompt('Give a number')
        numbers.push(num)
    }
}

number(5)

for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}

