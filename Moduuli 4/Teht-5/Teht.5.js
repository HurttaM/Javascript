'use strict';

async function fetchRandomJoke() {
    const url = 'https://api.chucknorris.io/jokes/random';

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        console.log(data.value);
    } catch (error) {
        console.error('Error fetching joke:', error);
    }
}

fetchRandomJoke();