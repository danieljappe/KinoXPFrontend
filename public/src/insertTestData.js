import { ShowingRepository } from "./repository/showing_repository.js";
import { MovieRepository } from "./repository/movie_repository.js";


const dateParser = new DateParser();

const movies = [

];

const showingsToCreate = [
  new Showing(10, 13, 2, "2023-10-18T15:00:00", dateParser),
  new Showing(11, 13, 1, "2023-10-18T16:00:00", dateParser),
  new Showing(12, 14, 2, "2023-10-19T17:00:00", dateParser),
];

for (let i = 0; i < showingsToCreate.length; i++) {
  showingRepository.createShowing(showingsToCreate[i]);
}