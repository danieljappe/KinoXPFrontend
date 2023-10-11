export default class Movie {
    movieId;
    title;
    genre; 
    year;
    rated;
    released;
    runtime;
    director;
    writer;
    actors;
    plot;
    plotDK;
    poster;
    metascore;
    imdbRating;
    imdbVotes;
    trailerURL;
    imdbID;
    website;
    response;
    
    // Contructor
    constructor(
        movieId,
        title,
        genre,
        year,
        rated,
        released,
        runtime,
        director,
        writer,
        actors,
        plot,
        plotDK,
        poster,
        metascore,
        imdbRating,
        imdbVotes,
        trailerURL,
        imdbID,
        website,
        response
    ) {
        this.movieId = movieId;
        this.title = title;
        this.genre = genre;
        this.year = year;
        this.rated = rated;
        this.released = released;
        this.runtime = runtime;
        this.director = director;
        this.writer = writer;
        this.actors = actors;
        this.plot = plot;
        this.plotDK = plotDK;
        this.poster = poster;
        this.metascore = metascore;
        this.imdbRating = imdbRating;
        this.imdbVotes = imdbVotes;
        this.trailerURL = trailerURL;
        this.imdbID = imdbID;
        this.website = website;
        this.response = response;
    }
}