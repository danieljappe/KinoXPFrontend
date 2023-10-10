export default class Repository {
    baseURL = "kino-xp-backend.azurewebsites.net";
    allMovies = baseURL + "/movies";
    allShowings = baseURL + "/showings";
    
    //arrays to keep data stored
    showings = [];
    movies = [];


    getAllMovies = function() {
        const response = fetch(allMovies);
        for (let i = 0; i < response.length; i++) {
            addToMoviesIfNotExists(setMovie(response[i]));
        }
    }

    getAllShowings = function() {
        // Work with the JSON data here
        //1. for each -> get movie
        //2. if movie id is already fetched, use the movie object from there.
    
        let movieObject = getMovieIfExists(movieId);
        //else get movie info and add to movies.
        //3. add to showings.
        //4. sort list by date                   
    }

    //fetch data
    fetch = function(url) {
        fetch(url).then(
            response => {
                if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
                return response.json();
            },
        ).then(data => data).catch(error => console.error('Fetch error:', error));
    }

    getMovieIfExists = function(id) {
        for (let i = 0; i < movies.length; i++) {
            if (movies[i].movieId === id) return movies[i];
        }
        return null;
    }

    addToMoviesIfNotExists = function(movie) {
        let exists = false;
        for (let i = 0; i < movies.length; i++) {
            if (movies[i].movieId === movie.movieId) return exists = true;
        }
        if (!exists) movies.push(movie);
    }

    createMovieObject = function(response) {

    }


}