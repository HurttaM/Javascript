'use strict';

document.getElementById('jokeForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const query = document.getElementById('query').value.trim();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (!query) {
        console.error('Please enter a search term.');
        return;
    }

    const url = `https://api.chucknorris.io/jokes/search?query=${encodeURIComponent(query)}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();

        if (data.result.length === 0) {
            resultsDiv.innerHTML = '<p>No jokes found for your search term.</p>';
        } else {
            data.result.forEach(joke => {
                const article = document.createElement('article');

                const paragraph = document.createElement('p');
                paragraph.textContent = joke.value;
                article.appendChild(paragraph);

                resultsDiv.appendChild(article);
            });
        }
    } catch (error) {
        console.error('Error fetching jokes:', error);
        resultsDiv.innerHTML = '<p>There was an error retrieving jokes. Please try again.</p>';
    }
});