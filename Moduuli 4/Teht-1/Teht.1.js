'use strict'


// action="https://api.tvmaze.com/search/shows">
//   <input id="query" name="q" type="text">
//   <input type="submit" value="Search">

document.querySelector('form').addEventListener('submit', async function (event) {
    event.preventDefault();
    const query = document.querySelector('#query').value;
    const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});