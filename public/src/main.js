import { ShowingRepository } from "./repository/showing_repository.js";
import { MovieRepository } from "./repository/movie_repository.js";
import { CurrentMovies as CurrentMovies } from "./current_movies/current_movies.js";
import { MovieSchedule as MovieSchedule } from "./movie_schedule/movie_schedule.js";
import { Schedule as Schedule } from "./models/schedule.js";
import { Showing } from "./models/showing.js";
import DateParser from "./utilities/date_parser.js";

//repositories
const showingRepository = new ShowingRepository();
const movieRepository = new MovieRepository();

//data
const showingsNext3Months = await showingRepository.getAllShowings();
const allMovies = await movieRepository.getAllMovies();
for (let i = 0; i < showingsNext3Months.length; i++) {
  showingsNext3Months[i].addMovie(
    await movieRepository.getMovie(showingsNext3Months[i].movieId),
  );
}

//FOR TESTING
/*
const dateParser = new DateParser();
const showingsToCreate = [
  new Showing(0, 1, 2, "2023-10-16T15:00:00", dateParser),
  new Showing(1, 2, 1, "2023-10-16T16:00:00", dateParser),
  new Showing(2, 3, 2, "2023-10-17T17:00:00", dateParser),
];

for (let i = 0; i < showingsToCreate.length; i++) {
  //showingRepository.createShowing(showingsToCreate[i]);
}
*/

//insert movies to 'current movies'-section
const currentMovies = new CurrentMovies(allMovies);
await currentMovies.show();

//add movie schedule
const schedule = new Schedule(showingsNext3Months);
const movieSchedule = new MovieSchedule(schedule, false);
movieSchedule.generateListViewItems();