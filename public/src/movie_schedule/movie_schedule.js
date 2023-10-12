import DateParser from "../utilities/date_parser.js";
import ElementMaker from "../element_maker/element_maker.js";

export default class MovieSchedule {
    dateParser;
    elementMaker;
    schedule;
    scheduleDestination;
    isMO;

    constructor(schedule, isMO) {
        this.elementMaker = new ElementMaker();
        this.scheduleDestination = document.getElementById('movie-schedule');
        this.schedule = schedule;
        this.isMO = isMO;
    }

    generateListViewItems = () => {
        for (let i = 0; i < this.schedule.schedule.length; i = i + this.schedule.showsPerDay) {
            this._createCard(
                this.schedule.schedule[i],
                this.schedule.schedule[i+1],
            );
        }
    }

    _getTheater = (theaterId) => {
        if (theaterId === 0) {
            return "";
        } else {
            return "Theater " + theaterId;
        }
    }

    _getTime = (theaterId, time) => {
        if (theaterId === 0) {
            return "";
        } else {
            return time;
        }
    }

    _createCard = function(showing1, showing2) {
        //initial card div
        const card = this.elementMaker.getDiv('date-card');
    
        //get header for the card
        card.appendChild(this.elementMaker.getP('date-text date-text-box', showing1.date));
    
        //make the movie-container for both movies
        card.appendChild(this._getMovieContainer(showing1, this.isMO));
        card.appendChild(this._getMovieContainer(showing2, this.isMO));
    
        //add to list view
        if (!this.isMO) {
            this.scheduleDestination.appendChild(card);
        } else {
            //moMovieSchedule.appendChild(card);
        }
    }

    _getMovieContainer = function(showing) {
        const movieContainer = this.elementMaker.getDiv('movie-container');
    
        //making a header, that display the time and theater
        const header = this.elementMaker.getDiv('movie-time-box');
        header.append(this.elementMaker.getP('movie-time-text', this._getTime(showing.theaterId, showing.time)));
        header.append(this.elementMaker.getP('movie-time-text', this._getTheater(showing.theaterId)));
        movieContainer.appendChild(header);
    
        const movieBox = this.elementMaker.getDiv('movie-box');
    
        //making a dark overlay with title and genre
        const overlay = this.elementMaker.getDiv('movie-overlay');
        overlay.appendChild(this.elementMaker.getP('movie-title', showing.movie.title));
        overlay.appendChild(this.elementMaker.getP('genre-title', showing.movie.genre));
        movieBox.appendChild(overlay);
    
        //add image
        const img = document.createElement('img');
        img.className = 'poster-image';
        img.src = showing.imageUrl;
        img.alt = showing.title;
        movieBox.appendChild(img);
    
        //add buttons
        const buttons = this.elementMaker.getDiv('movie-action-buttons');
        if (!this.isMO) {
            buttons.appendChild(this.elementMaker.getButton('action-button-left', 'Details'));
            buttons.appendChild(this.elementMaker.getButton('action-button-right', 'Book Seats'));
        } else {
            buttons.appendChild(this.elementMaker.getButton('mo-action-button', 'Edit'));
        }
        movieBox.appendChild(buttons);
        movieContainer.appendChild(movieBox);
        //return the movie container
        return movieContainer;
    }
} export { MovieSchedule };