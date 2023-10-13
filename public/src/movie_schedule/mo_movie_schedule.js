import { ShowingRepository } from "../repository/showing_repository.js";
import { MovieRepository } from "../repository/movie_repository.js";
import { MovieSchedule as MovieSchedule } from "../movie_schedule/movie_schedule.js";
import { Schedule as Schedule } from "../models/schedule.js";


/*   Movie Schedule   */
console.log("before");

//repositories
const showingRepository = new ShowingRepository();
const movieRepository = new MovieRepository();

//data
const showingsNext3Months = await showingRepository.getAllShowings();
for (let i = 0; i < showingsNext3Months.length; i++) {
  showingsNext3Months[i].addMovie(
    await movieRepository.getMovie(showingsNext3Months[i].movieId),
  );
}

//add movie schedule
const schedule = new Schedule(showingsNext3Months);
const movieSchedule = new MovieSchedule(schedule, true);
movieSchedule.generateListViewItems();