export default class Showing {
    movieId; //num
    theaterId; //num
    dateTime; //dateTime eg. "2023-10-06T15:00:00"
    time; //string
    date; //string
    movie = undefined;
    
    // Contructor
    constructor(
        movieId, //num
        theaterId, //num
        dateTime, //string
        dateParser, //object for parsing dates
    ) {
        //direct class variables
        this.movieId = movieId;
        this.theaterId = theaterId;
        this.dateTime = dateTime;

        //get time and date from dateTime
        const dateObject = new Date(dateTime);
        this.date = dateParser.parseDate(dateObject, new Date(Date.now()));
        this.time = dateParser.getTimeFromIso8601(this.dateTime);
    }

    addMovie = (movie) => this.movie = movie;
    
}