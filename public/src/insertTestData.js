import { ShowingRepository } from "./repository/showing_repository.js";
import { MovieRepository } from "./repository/movie_repository.js";


const dateParser = new DateParser();

const movies = [
    
];

const showingsToCreate = [
  new Showing(0, 1, 2, "2023-10-16T15:00:00", dateParser),
  new Showing(1, 2, 1, "2023-10-16T16:00:00", dateParser),
  new Showing(2, 3, 2, "2023-10-17T17:00:00", dateParser),
];

for (let i = 0; i < showingsToCreate.length; i++) {
  //showingRepository.createShowing(showingsToCreate[i]);
}