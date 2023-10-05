//DOM Manipulation

//List Views
const publicMovieSchedule = document.getElementById('movie-schedule');

//Data
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
    title : "After Everything", 
    genre : "Romance", 
    imageUrl : "https://poster.ebillet.dk/MordetIVenedig-2023.large.jpg", 
    hour : "21:00", 
    date : "October 25th",
    theater : "Theater 2"
}

//create card for each day
const createCard = function(movie1, movie2, isMO) {
    //initial card div
    const card = getDiv('date-card');

    //get header for the card
    card.appendChild(getP('date-text date-text-box', movie1.date));

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
    const movieContainer = getDiv('movie-container');

    //making a header, that display the time and theater
    const header = getDiv('movie-time-box');
    header.append(getP('movie-time-text', movie.hour));
    header.append(getP('movie-time-text', movie.theater));
    movieContainer.appendChild(header);

    const movieBox = getDiv('movie-box');

    //making a dark overlay with title and genre
    const overlay = getDiv('movie-overlay');
    overlay.appendChild(getP('movie-title', movie.title));
    overlay.appendChild(getP('genre-title', movie.genre));
    movieBox.appendChild(overlay);

    //add image
    const img = document.createElement('img');
    img.className = 'poster-image';
    img.src = movie.imageUrl;
    img.alt = movie.title;
    movieBox.appendChild(img);

    //add buttons
    const buttons = getDiv('movie-action-buttons');
    if (!isMO) {
        buttons.appendChild(getButton('action-button-left', 'Details'));
        buttons.appendChild(getButton('action-button-right', 'Book Seats'));
    } else {
        buttons.appendChild(getButton('mo-action-button', 'Edit'));
    }
    movieBox.appendChild(buttons);
    movieContainer.appendChild(movieBox);
    //return the movie container
    return movieContainer;
}

//Makes a button
const getButton = function(className, text) {
    const button = document.createElement('button');
    className != null? button.className = className : null;
    button.innerText = text;
    return button;
}

//Makes a p-tag
const getP = function(className, text) {
    const p = document.createElement('p');
    className != null? p.className = className : null;
    p.innerText = text;
    return p;
}

//makes a div with a potential class name
const getDiv = function(className) {
    const div = document.createElement('div');
    className != null? div.className = className : null;
    return div;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function parseDate(date, now) {
    const monthNumber = date.getMonth() + 1;
    const dayNumber = date.getDate();
    if (dayNumber == now.getDate() + 1 && monthNumber == now.getMonth() + 1) {
        return "Today";
    } else if (monthNumber == now.getMonth() + 1 && dayNumber == now.getDate() + 1 + 1) {
        return "Tomorrow"
    }

    let month = "undefined";
    let suffix = "th";
    switch(monthNumber) {
        case 1: month = "January"; break;
        case 2: month = "February"; break;
        case 3: month = "March"; break;
        case 4: month = "April"; break;
        case 5: month = "May"; break;
        case 6: month = "June"; break;
        case 7: month = "July"; break;
        case 8: month = "August"; break;
        case 9: month = "September"; break;
        case 10: month = "October"; break;
        case 11: month = "November"; break;
        case 12: month = "December"; break;
    }
    const lastDigit = date.getDate() % 10;
    switch(lastDigit) {
        case 1: suffix = "st"; break;
        case 2: suffix = "nd"; break;
        case 3: suffix = "rd"; break;
        default: suffix = "th"; break;
    }
    return `${month} ${date.getDate()}${suffix}`;
}


const now = new Date(Date.now())
const d = new Date("2023-10-5");
for (i = 0; i < 30; i++) {
    const a = getRandomInt(2);
    const b = getRandomInt(2);
    movie1.date = parseDate(d, now);
    movie2.date = parseDate(d, now);
    movie3.date = parseDate(d, now);
    movie4.date = parseDate(d, now);
    createCard(
        a == 0? movie3 : movie2, 
        b == 0? movie1 : movie4, 
        false,
    );
    createCard(
        a == 0? movie3 : movie2, 
        b == 0? movie1 : movie4, 
        true,
    );
    d.setDate(d.getDate() + 1);
}