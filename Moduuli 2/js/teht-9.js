'use strict';

function even(arr) {
    let evenNumbers = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        }
    }

    return evenNumbers;  // Return the new array with even numbers
}

const numbers = [93, 22, 4, 15, 8];

const evenNumbers = even(numbers);

console.log("Original Array:", numbers);
console.log("Even Numbers Array:", evenNumbers);