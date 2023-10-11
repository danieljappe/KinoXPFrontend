export default class Schedule {
    showsPerDay = 2;
    schedule; // e.g. Object {date: new Date(date), showing: showing}

    constructor(showings) {
        this._createSchedule(showings);
    }

    _createSchedule = (showings) => {
        const today = new Date(Date.now());

    }

    _createPlaceholder = () => {
        return new Showing(
            //https://i.imgur.com/Z2MYNbj.png/large_movie_poster.png
            
        );
    }

    
}