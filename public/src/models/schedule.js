import DateParser from "../utilities/date_parser.js";
import Showing from "./showing.js";
import Movie from "./movie.js";

export default class Schedule {
    showsPerDay;
    dateParser;
    schedule = []; // e.g. Object {date: new Date(date), showing: showing}

    constructor(showings) {
        this.showsPerDay = 2;
        this.dateParser = new DateParser();
        this.schedule = this._createSchedule(showings);
    }

    _createSchedule = (showings) => {
        const result = [];
        const date = new Date(Date.now());
        for (let i = 0; i < 60; i++) {
            const plannedShowings = this._findShowingsByDate(date, showings);
            if (plannedShowings.length == 0) {
                //no showings for the date... adds 2 placeholders
                result.push(this._createPlaceholder(date.toISOString()));
                result.push(this._createPlaceholder(date.toISOString()));
            } else if(plannedShowings.length == 1) {
                //1 out of 2 showings for the date... adds 1 placeholder
                result.push(this._createPlaceholder(date.toISOString()));
                result.push(plannedShowings[0]);
            } else {
                //2 showings for the day... adds no placeholders
                result.push(plannedShowings[0]);
                result.push(plannedShowings[1]);
            }
            date.setDate(date.getDate() + 1);
        }
        return result;
    }

    _findShowingsByDate(date, showings) {
        const results = [];
        for (let i = 0; i < showings.length; i++) {
            if (this._sameDate(new Date(showings[i].dateTime), date) && this._sameMonth(new Date(showings[i].dateTime), date)) {
                results.push(showings[i]);
            }
            if (results.length == this.showsPerDay) return results;
        }
        return results;
    }

    _sameDate = (now, date) => now.getDate() === date.getDate();
    _sameMonth = (now, date) => now.getMonth() === date.getMonth();

    _createPlaceholder = (date) => {
        const placeholder =  new Showing(-1, -1, 0, date, this.dateParser);
        const placeholderMovie = new Movie(
            -1,
            "Empty",
            "",
            "",
            "",
            "",
            0,
            "",
            "",
            "",
            "",
            "",
            "https://i.imgur.com/Z2MYNbj.png/large_movie_poster.png",
            "",
            "",
            "",
            "",
            -1,
            "",
            "",
        );
        placeholder.addMovie(placeholderMovie);
        return placeholder;
    }

    
} export { Schedule };