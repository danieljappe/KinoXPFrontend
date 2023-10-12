export default class Schedule {
    showsPerDay = 2;
    dateParser = new DateParser();
    schedule = []; // e.g. Object {date: new Date(date), showing: showing}

    constructor(showings) {
        schedule = this._createSchedule(showings);
    }

    _createSchedule = (showings) => {
        const result = [];
        const date = new Date(Date.now());
        for (let i = 0; i < 60; i++) {
            const plannedShowings = this._findShowingsByDate(date, showings);
            if (plannedShowings.length == 0) {
                //no showings for the date... adds 2 placeholders
                result.push(this._createPlaceholder(0));
                result.push(this._createPlaceholder(0));
            } else if(plannedShowings.length == 1) {
                //1 out of 2 showings for the date... adds 1 placeholder
                result.push(this._createPlaceholder(0));
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
            if (this._sameDate(showings[i].dateTime, date) && this._sameMonth(showings[i].dateTime, date)) {
                results.push(showings[i]);
            }
            if (results.length == this.showsPerDay) return results;
        }
        return results;
    }

    _sameDate = (now, date) => now.getDate() == date.getDate();
    _sameMonth = (now, date) => now.getMonth() == date.getMonth();

    _createPlaceholder = (theaterId) => {
        const placeholder =  new Showing(-1, -1, theaterId, "2023-10-16T15:00:00", this.dateParser);
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

    
}