export default class Repository {
    baseURL;
    allMovies;
    allShowings3Months;
    allShowings2Months;

    constructor() {
        this.baseURL = "https://kino-xp-backend.azurewebsites.net";
        this.allMovies = this.baseURL + "/movies";
        this.allShowings3Months = this.baseURL + "/showings/months/3";
        this.allShowings2Months = this.baseURL + "/showings/months/2";
    }
    
    //arrays to keep data stored
    showings = [];
    movies = [];


    getAllMovies = function() {
        const response = fetch(this.allMovies);
        console.log(response);
        for (let i = 0; i < response.length; i++) {
            addToMoviesIfNotExists(setMovie(response[i]));
        }
        return movies;
    }


    getAllShowings = async function() {
        console.log(this.allShowings3Months);
        const response = await fetch(this.allShowings3Months);
        console.log(response);
    }

    // Fetch data
    fetch = async function(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Fetch error:', error);
            throw error; // Re-throw the error so that it can be handled further if needed
        }
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


} export { Repository as TheRepository };