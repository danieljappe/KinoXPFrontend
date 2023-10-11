//get testing data from the script.js file
import DateParser from "../utilities/date_parser.js";
import ElementMaker from "../element_maker/element_maker.js";

const elementMaker = new ElementMaker();

//List View
const publicMovieSchedule = document.getElementById('movie-schedule');

//List data
let showings = [];  //showings with movies
let movies = []; //movie objects


//Test Data
const movie1 = {
    title : "The Creator", 
    genre : "Action", 
    imageUrl : "https://i.redd.it/official-imax-poster-for-the-creator-v0-zpy1eapn809b1.jpg?s=c255ca1ac08c539a52d4d2e9717100db04cb05b6", 
    hour : "21:00", 
    date : "October 25th",
    theater : "Theater 2"
}
const movie2 = {
    title : "Barbie", 
    genre : "Comedy", 
    imageUrl : "https://cinemaxx.azureedge.net/poster/Barbie_Shoulder-2023.hd.jpg?mode=stretch&height=700", 
    hour : "18:00",
    date : "October 25th",
    theater : "Theater 1"
}
const movie3 = {
    title : "After Everything", 
    genre : "Romance", 
    imageUrl : "https://cinemaxx.azureedge.net/poster/AfterEverything2023.hd.jpg?mode=stretch&height=700", 
    hour : "18:00", 
    date : "October 25th",
    theater : "Theater 1"
}
const movie4 = {
    title : "Murder In Venice", 
    genre : "Crime", 
    imageUrl : "https://poster.ebillet.dk/MordetIVenedig-2023.large.jpg", 
    hour : "21:00", 
    date : "October 25th",
    theater : "Theater 2"
}

//create card for each day
const createCard = function(movie1, movie2, isMO) {
    //initial card div
    const card = elementMaker.getDiv('date-card');

    //get header for the card
    card.appendChild(elementMaker.getP('date-text date-text-box', movie1.date));

    //make the movie-container for both movies
    card.appendChild(getMovieContainer(movie1, isMO));
    card.appendChild(getMovieContainer(movie2, isMO));

    //add to list view
    if (!isMO) {
        publicMovieSchedule.appendChild(card);
    } else {
        //moMovieSchedule.appendChild(card);
    }
}

//makes a movie-container
const getMovieContainer = function(movie, isMO) {
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
    if (!isMO) {
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


//todo: implement

//Test Run - insert test data to test
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const d = new Date("2023-10-6");
const dateParser = new DateParser();
const now = new Date(Date.now());

for (let i = 0; i < 30; i++) {
    const a = getRandomInt(2), b = getRandomInt(2);
    movie1.date = dateParser.parseDate(d, now);
    movie2.date = dateParser.parseDate(d, now);
    movie3.date = dateParser.parseDate(d, now);
    movie4.date = dateParser.parseDate(d, now);
    createCard(a == 0? movie3 : movie2, b == 0? movie1 : movie4, false);
    createCard(a == 0? movie3 : movie2, b == 0? movie1 : movie4, true);
    d.setDate(d.getDate() + 1);
}