import DateParser from "../utilities/date_parser.js";
import ElementMaker from "../element_maker/element_maker.js";

export default class MovieSchedule {
    dateParser;
    elementMaker = new ElementMaker();
    schedule;
    scheduleDestination = document.getElementById('movie-schedule');
    isMO;

    constructor(schedule, isMO) {
        this.schedule = schedule;
        this.isMO = isMO;
    }

    generateListViewItems = () => {
        for (let i = 0; i < this.schedule.schedule.length; i = i + this.schedule.showsPerDay) {
            this._createCard(
                this.schedule.schedule[i].movie,
                this.schedule.schedule[i+1].movie,
            );
        }
    }

    _createCard = function(movie1, movie2) {
        //initial card div
        const card = elementMaker.getDiv('date-card');
    
        //get header for the card
        card.appendChild(elementMaker.getP('date-text date-text-box', movie1.date));
    
        //make the movie-container for both movies
        card.appendChild(getMovieContainer(movie1, this.isMO));
        card.appendChild(getMovieContainer(movie2, this.isMO));
    
        //add to list view
        if (!this.isMO) {
            scheduleDestination.appendChild(card);
        } else {
            //moMovieSchedule.appendChild(card);
        }
    }

    _getMovieContainer = function(movie) {
        const movieContainer = elementMaker.getDiv('movie-container');
    
        //making a header, that display the time and theater
        const header = elementMaker.getDiv('movie-time-box');
        header.append(elementMaker.getP('movie-time-text', movie.hour));
        header.append(elementMaker.getP('movie-time-text', movie.theater));
        movieContainer.appendChild(header);
    
        const movieBox = elementMaker.getDiv('movie-box');
    
        //making a dark overlay with title and genre
        const overlay = elementMaker.getDiv('movie-overlay');
        overlay.appendChild(elementMaker.getP('movie-title', movie.title));
        overlay.appendChild(elementMaker.getP('genre-title', movie.genre));
        movieBox.appendChild(overlay);
    
        //add image
        const img = document.createElement('img');
        img.className = 'poster-image';
        img.src = movie.imageUrl;
        img.alt = movie.title;
        movieBox.appendChild(img);
    
        //add buttons
        const buttons = elementMaker.getDiv('movie-action-buttons');
        if (!this.isMO) {
            buttons.appendChild(elementMaker.getButton('action-button-left', 'Details'));
            buttons.appendChild(elementMaker.getButton('action-button-right', 'Book Seats'));
        } else {
            buttons.appendChild(elementMaker.getButton('mo-action-button', 'Edit'));
        }
        movieBox.appendChild(buttons);
        movieContainer.appendChild(movieBox);
        //return the movie container
        return movieContainer;
    }
}