import Showing from "../models/showing.js";
import DateParser from "../utilities/date_parser.js";
import Repository from "./repository.js";

export default class ShowingRepository extends Repository {
    createShowingURL;
    allShowings3Months;
    allShowings2Months;
    dateParser;
    showings = [];

    constructor() {
        super();
        this.allMovies = this.baseURL + "/movies";
        this.createShowingURL = this.baseURL + "/showing";
        this.allShowings3Months = this.baseURL + "/showings/months/3";
        this.allShowings2Months = this.baseURL + "/showings/months/2";
        this.dateParser = new DateParser();
    }

    createShowing = async function(showing) { //requires a showing class -> ../models/showing.js
        try {
            const jsonObject = {
                "movieId" : showing.movieId,
                "theaterId" : showing.theaterId,
                "showingDateTime" : new Date(showing.dateTime)
            };
            const response = await this.post(this.createShowingURL, jsonObject);
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            const json = await response.json();
            return json;
        } catch (error) {
            console.error('Create Showing Error:', error);
            throw error;
        }
    }

    getAllShowings = async function() {
        const response = await this.fetchData(this.allShowings3Months);
        //const response = await this.fetchData(this.allShowings3Months);
        console.log(`There are ${response.length} showings`);
        if (response.length === 0) return [];
        for (let i = 0; i < response.length; i++) {
            this.showings.push(this.createShowingObject(response[i])); 
        }
        return this.showings;
    }

    createShowingObject = function(response) {
        return new Showing(response.showingId, response.movieId, response.theaterId, response.showingDateTime, this.dateParser);
    }

}; export { ShowingRepository };