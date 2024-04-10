
function searchMovies() {
    const searchInput = document.getElementById('searchInput').value;
    const apiKey = 'c82ae8cf';
    const apiUrl = `https://www.omdbapi.com/?t=${searchInput}&apikey=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.Response === 'True') {
                displayMovieDetails(data);
            } else {
                document.getElementById('movieDetailsContainer').innerHTML = '<p>No movie found!</p>';
            }
        })
        .catch(error => console.log('Error fetching movie details:', error));
}

function displayMovieDetails(movie) {
    const movieDetailsContainer = document.getElementById('movieDetailsContainer');
    movieDetailsContainer.innerHTML = `
        <div class="movie-details">
            <img src="${movie.Poster}" alt="${movie.Title} Poster">
            <div>
                <h2>${movie.Title}</h2>
                <p><strong>Year:</strong> ${movie.Year}</p>
                <p><strong>Runtime:</strong>${movie.Runtime}</p>
                <p><strong>Genre:</strong>${movie.Genre}</p>
                <p><strong>Director:</strong>${movie.Director}</p>
                <p><strong>Plot:</strong> ${movie.Plot}</p>

            </div>
        </div>
    `;
}