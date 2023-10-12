import Showing from "./models/showing.js";
import { ShowingRepository } from "./repository/showing_repository.js";
import { MovieRepository } from "./repository/movie_repository.js";
import DateParser from "./utilities/date_parser.js";

console.log("before");
const showingRepository = new ShowingRepository();
const movieRepository = new MovieRepository();
/*const movs = repository.getAllMovies();
for (let i = 0; i < movs.length; i++) console.log(movs[i]);*/

const showings = await showingRepository.getAllShowings();
const dateParser = new DateParser();

const showingsToCreate = [
  new Showing(0, 1, 2, "2023-10-16T15:00:00", dateParser),
  new Showing(1, 2, 1, "2023-10-16T16:00:00", dateParser),
  new Showing(2, 3, 2, "2023-10-16T17:00:00", dateParser)
];

for (let i = 0; i < showingsToCreate.length; i++) {
  //showingRepository.createShowing(showingsToCreate[i]);
}

const allMovies = await movieRepository.getAllMovies();

for (let i = 0; i < showings.length; i++) {
  const movie = await movieRepository.getMovie(showings[i].movieId);
  showings[i].movie = movie;
  console.log(showings[i]);
}
