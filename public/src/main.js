import Showing from "./models/showing.js";
import { ShowingRepository } from "./repository/showing_repository.js";
import { MovieRepository } from "./repository/movie_repository.js";
import { CurrentMovies as CurrentMovies } from "./current_movies/current_movies.js";

//repositories
const showingRepository = new ShowingRepository();
const movieRepository = new MovieRepository();

//data
const showingsNext3Months = await showingRepository.getAllShowings();
const allMovies = await movieRepository.getAllMovies();

/* //FOR TESTING
const showingsToCreate = [
  new Showing(0, 1, 2, "2023-10-16T15:00:00", dateParser),
  new Showing(1, 2, 1, "2023-10-16T16:00:00", dateParser),
  new Showing(2, 3, 2, "2023-10-16T17:00:00", dateParser)
];

for (let i = 0; i < showingsToCreate.length; i++) {
  //showingRepository.createShowing(showingsToCreate[i]);
}
*/

//insert movies to 'current movies'-section
const currentMovies = new CurrentMovies(allMovies);
await currentMovies.show();





document.addEventListener('DOMContentLoaded', function() {
      const close = document.querySelector('.close');


  window.addEventListener('click', function(event) {
    if (event.target == movieModal) {
        movieModal.style.display = 'none';
    }
  });

  close.onclick = function() {
      modal.style.display = "none";
  }

  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }

  // Login Modal

  var loginModal = document.getElementById("myModal");
  // Get the button that opens the modal
  var loginLink = document.getElementById("login-link");
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  // When the user clicks on the link, open the modal

  loginLink.onclick = function(event) {
      event.preventDefault(); // Prevent the default link behavior (navigating to a new page)
      loginModal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      loginModal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == loginModal) {
        loginModal.style.display = "none";
      }
    }

    // Toggle function to show/hide an element
    function toggleElement(element) {
        if (element.style.display === "none" || element.style.display === "") {
          element.style.display = "block";
        } else {
          element.style.display = "none";
        }
      }

      // Add event listener to login button
      const loginButton = document.querySelector('.login-button');
      const loginForm = document.querySelector('.login-form');

      loginButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevents the form from being submitted
        toggleElement(loginForm);
      });
    
});