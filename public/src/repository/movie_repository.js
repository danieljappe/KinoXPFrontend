import Showing from "../models/showing.js";
import DateParser from "../utilities/date_parser.js";
import Repository from "./repository.js";

export default class MovieRepository extends Repository {
    allMovies;

    constructor() {
        super();
        this.allMovies = this.baseURL + "/movies";
    }
    
    //arrays to keep data stored
    movies = [];


    getAllMovies = function() {
        
    }

    createMovieObject = function(jsonResponse) {

    }


} export { MovieRepository };