import Repository from "./repository.js";
import Movie from "../models/movie.js";

export default class MovieRepository extends Repository {
    allMovies;
    byID;


    constructor() {
        super();
        this.allMovies = this.baseURL + "/api/movies/get-all";
        this.byID = this.baseURL + "/api/movies/movie-id"
    }
    
    //arrays to keep data stored
    movies = [];


    getAllMovies = async function() {
        const response = await this.fetchData(this.allMovies);
        console.log(`There are ${response.length} movies`);
        if (response.length === 0) return [];
        for (let i = 0; i < response.length; i++) {
            this.movies.push(this.createMovieObject(response[i]));
        }
        return this.movies;
    }

    getMovie = async function(id) {
        const URL = this.byID + "/" + id;
        const response = await this.fetchData(URL);
        return this.createMovieObject(response, id);
    }

    createMovieObject = function(json, id) {
        return new Movie(
            id,
            json.title,
            json.genre,
            json.year,
            json.rated,
            json.released,
            json.runtime,
            json.director,
            json.writer,
            json.actors,
            json.plot,
            json.plotDK,
            json.poster,
            json.metascore,
            json.imdbRating,
            json.imdbVotes,
            json.trailerUrl,
            json.imdbID,
            json.website,
            json.response
        );
    }


} export { MovieRepository };