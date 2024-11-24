'use strict';

document.getElementById('searchForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const query = document.getElementById('query').value.trim();
    if (!query) {
        console.error('Please enter a show name.');
        return;
    }

    const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});