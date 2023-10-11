import Showing from "../models/showing.js";
import DateParser from "../utilities/date_parser.js";
import Repository from "./repository.js";

export default class ShowingRepository extends Repository {
    createShowing;
    allShowings3Months;
    allShowings2Months;
    dateParser;

    constructor() {
        super();
        this.allMovies = this.baseURL + "/movies";
        this.createShowing = this.baseURL + "/showing";
        this.allShowings3Months = this.baseURL + "/showings/months/3";
        this.allShowings2Months = this.baseURL + "/showings/months/2";
        this.dateParser = new DateParser();
    }
    
    //arrays to keep data stored
    showings = [];
    movies = [];


    getAllMovies = function() {
        
    }

    async createShowing(showingData) {
        try {
            const response = await fetch(this.allShowings3Months, {
                method: 'POST',
                headers: {  'Content-Type': 'application/json'  },
                body: JSON.stringify(showingData),
            });
            console.log(response);
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            const createdShowing = await response.json();
            return createdShowing;
        } catch (error) {
            console.error('Create Showing Error:', error);
            throw error;
        }
    }

    getAllShowings = async function() {
        const response = await this.fetchData(this.allShowings2Months);
        console.log(`There are ${response.length} showings`);
        if (response.length === 0) return [];
        for (let i = 0; i < response.length; i++) {
            showings.push(createShowingObject(response[i])); 
        }
        
        return showings;
    }

    createShowingObject = function(jsonResponse) {
        return new Showing(jsonResponse.movieId, jsonResponse.theaterId, jsonResponse.date, dateParser);
    }

    createMovieObject = function(jsonResponse) {

    }


} export { ShowingRepository };