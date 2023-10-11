import Showing from "../models/showing.js";
import DateParser from "../utilities/date_parser.js";
import Repository from "./repository.js";

export default class ShowingRepository extends Repository {
    createShowing;
    allShowings3Months;
    allShowings2Months;
    dateParser;
    showings = [];

    constructor() {
        super();
        this.allMovies = this.baseURL + "/movies";
        this.createShowing = this.baseURL + "/showing";
        this.allShowings3Months = this.baseURL + "/showings/months/3";
        this.allShowings2Months = this.baseURL + "/showings/months/2";
        this.dateParser = new DateParser();
    }

    async createShowing(showingData) { //requires a showing class
        try {
            const jsonObject = {
                "movieId" : showingData.movieId,
                "theaterId" : showingData.theaterId,
                "showingDate" : showingData.showingDate
            };
            const response = await this.post(createShowing, jsonObject);
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            const createShowing = await response.json();
            return createShowing;
        } catch (error) {
            console.error('Create Showing Error:', error);
            throw error;
        }
    }

    getAllShowings = async function() {
        const response = await this.fetchData(this.baseURL + "/showings");
        //const response = await this.fetchData(this.allShowings3Months);
        console.log(`There are ${response.length} showings`);
        if (response.length === 0) return [];
        for (let i = 0; i < response.length; i++) {
            console.log(response[i].theaterId);
            this.showings.push(this.createShowingObject(response[i])); 
        }
        return this.showings;
    }

    createShowingObject = function(response) {
        return new Showing(response.movieId, response.theaterId, response.showingDateTime, this.dateParser);
    }

    createMovieObject = function(jsonResponse) {

    }


} export { ShowingRepository };