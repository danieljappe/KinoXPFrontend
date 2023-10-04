    const movies = [
      { id: 1, title: "Film 1", description: "Description 1", genre: "genre 1", ageRestriction: 18, runTime: 120, trailerLink: "https://www.youtube.com/embed/5PSNL1qE6VY", posterLink: "https://images-na.ssl-images-amazon.com/images/I/51oDs32SXlL._AC_.jpg" },
      { id: 2, title: "Film 2", description: "Description 2", genre: "genre 2", ageRestriction: 12, runTime: 90, trailerLink: "https://www.youtube.com/embed/5PSNL1qE6VY", posterLink: "https://images-na.ssl-images-amazon.com/images/I/51oDs32SXlL._AC_.jpg" },
      { id: 3, title: "Film 3", description: "Description 3", genre: "genre 3", ageRestriction: 16, runTime: 105, trailerLink: "https://www.youtube.com/embed/5PSNL1qE6VY", posterLink: "https://images-na.ssl-images-amazon.com/images/I/51oDs32SXlL._AC_.jpg" },
      { id: 4, title: "Film 4", description: "Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien. Lorem Ipsum har været standard fyldtekst siden 1500-tallet, hvor en ukendt trykker sammensatte en tilfældig spalte for at trykke en bog til sammenligning af forskellige skrifttyper. Lorem Ipsum har ikke alene overlevet fem århundreder, men har også vundet indpas i elektronisk typografi uden væsentlige ændringer.Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien. Lorem Ipsum har været standard fyldtekst siden 1500-tallet, hvor en ukendt trykker sammensatte en tilfældig spalte for at trykke en bog til sammenligning af forskellige skrifttyper. Lorem Ipsum har ikke alene overlevet fem århundreder, men har også vundet indpas i elektronisk typografi uden væsentlige ændringer.", genre: "genre 4", ageRestriction: 12, runTime: 95, trailerLink: "https://www.youtube.com/embed/5PSNL1qE6VY", posterLink: "https://images-na.ssl-images-amazon.com/images/I/51oDs32SXlL._AC_.jpg" },
      { id: 5, title: "Film 5", description: "Description 5", genre: "genre 5", ageRestriction: 18, runTime: 130, trailerLink: "https://www.youtube.com/embed/5PSNL1qE6VY", posterLink: "https://images-na.ssl-images-amazon.com/images/I/51oDs32SXlL._AC_.jpg" },
      { id: 6, title: "Film 6", description: "Description 6", genre: "genre 6", ageRestriction: 12, runTime: 100, trailerLink: "https://www.youtube.com/embed/5PSNL1qE6VY", posterLink: "https://images-na.ssl-images-amazon.com/images/I/51oDs32SXlL._AC_.jpg" },
      { id: 7, title: "Film 7", description: "Description 7", genre: "genre 7", ageRestriction: 16, runTime: 110, trailerLink: "https://www.youtube.com/embed/5PSNL1qE6VY", posterLink: "https://images-na.ssl-images-amazon.com/images/I/51oDs32SXlL._AC_.jpg" }
    ];

const flexboxContainer = document.querySelector('.flexbox-container');
const flexboxContent = document.querySelector('.flexbox-content');

movies.forEach(movie => {
  const divElement = document.createElement('div');
  divElement.className = `flexbox-item flexbox-item-${movie.id}`;
  divElement.style.backgroundImage = `url(${movie.posterLink})`;
  divElement.innerHTML = `
    <div class="description">
      <h3>${movie.title}</h3>
      <p>${movie.description}</p>
      <p><strong>Genre:</strong> ${movie.genre}</p>
      <p><strong>Age Restriction:</strong> ${movie.ageRestriction}</p>
      <p><strong>Run Time:</strong> ${movie.runTime} minutes</p>
      <a href="${movie.trailerLink}" target="_blank">Watch Trailer</a>
    </div>
  `;
  flexboxContent.appendChild(divElement);
});

document.addEventListener('DOMContentLoaded', function() {
    
  const modal = document.getElementById('movieModal');
  const close = document.querySelector('.close');

  close.onclick = function() {
      modal.style.display = "none";
  }

  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }

  const flexboxItems = document.querySelectorAll('.flexbox-item');

  flexboxItems.forEach((flexboxItem, index) => {
      flexboxItem.addEventListener("click", function() {
          // Populate modal with movie details
          document.getElementById('modalPoster').src = movies[index].posterLink;
          document.getElementById('modalTitle').textContent = movies[index].title;
          document.getElementById('modalDescription').textContent = movies[index].description;
          document.getElementById('modalGenre').textContent = movies[index].genre;
          document.getElementById('modalAgeRestriction').textContent = movies[index].ageRestriction;
          document.getElementById('modalRunTime').textContent = movies[index].runTime + " minutes";
          document.getElementById('modalTrailer').src = movies[index].trailerLink;

          // Display modal
          modal.style.display = "block";

          var movieModal = document.getElementById("movieModal"); 
          // Get the <span> element that closes the modal
          var span = document.getElementsByClassName("close")[0];
          // When the user clicks on the link, open the modal
          loginLink.onclick = function(event) {
              event.preventDefault(); // Prevent the default link behavior (navigating to a new page)
              loginModal.style.display = "block";
            }
            // When the user clicks on <span> (x), close the modal
            span.onclick = function() {
              movieModal.style.display = "none";
            }
            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
              if (event.target == modal) {
                movieModal.style.display = "none";
              }
            }
          
          
      });
  });

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
    movieModal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      loginModal.style.display = "none";
      movieModal.style.display = "none";
    }
  }

    const loginButton = document.querySelector('.login-button');
    const loginForm = document.querySelector('.login-form');

    loginButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevents the form from being submitted

        if (loginForm.style.display === "none" || loginForm.style.display === "") {
            loginForm.style.display = "block";
        } else {
            loginForm.style.display = "none";
        }
    });
    
});








