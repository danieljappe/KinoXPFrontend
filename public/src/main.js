import { ShowingRepository } from "./repository/showing_repository.js";

const movies = [
  {
      id: 1,
      title: "Inception",
      description: "Dom Cobb, a skilled thief, and corporate espionage specialist is tasked with a unique job - to implant an idea into a person's mind through their dreams. As he assembles a team, they delve into layers of dreams within dreams, facing unexpected challenges and questioning the reality around them.",
      genre: "Science Fiction/Thriller",
      ageRestriction: 13,
      runTime: 148,
      trailerLink: "https://www.youtube.com/embed/8hP9D6kZseM",
      posterLink: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg"
  },
  {
      id: 2,
      title: "The Shawshank Redemption",
      description: "Andy Dufresne, a banker wrongly accused of murder, is sentenced to life in Shawshank State Penitentiary. Within the harsh prison walls, he forms an unlikely friendship with fellow inmate Red. Together, they find hope and redemption in the most unlikely places.",
      genre: "Drama/Crime",
      ageRestriction: 17,
      runTime: 142,
      trailerLink: "https://www.youtube.com/embed/6hB3S9bIaco",
      posterLink: "https://m.media-amazon.com/images/M/MV5BMTc3NjM4MTY3MV5BMl5BanBnXkFtZTcwODk4Mzg3OA@@._V1_.jpg"
  },
  {
      id: 3,
      title: "The Avengers",
      description: "Earth's mightiest heroes, including Iron Man, Captain America, Thor, Hulk, and others, are assembled by S.H.I.E.L.D. to save the world from Loki and his alien army. As they join forces, they learn to work as a team, combining their unique abilities to battle a global threat.",
      genre: "Action/Adventure",
      ageRestriction: 13,
      runTime: 143,
      trailerLink: "https://www.youtube.com/embed/eOrNdBpGMv8",
      posterLink: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
  },
  {
      id: 4,
      title: "La La Land",
      description: "Mia, an aspiring actress, and Sebastian, a jazz musician, pursue their dreams in the vibrant city of Los Angeles. As they face the challenges of a competitive industry, they discover the sacrifices and heartaches that come with following their passions.",
      genre: "Musical/Romance",
      ageRestriction: 13,
      runTime: 128,
      trailerLink: "https://www.youtube.com/embed/0pdqf4P9MB8",
      posterLink: "https://m.media-amazon.com/images/M/MV5BZjYzNTMzZTAtNzMzOS00ZWRhLTg3MWMtM2NjYmJmZjU4NmFhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMzI3NjY2ODc@._V1_.jpg"
  },
  {
      id: 5,
      title: "The Grand Budapest Hotel",
      description: "In the fictional Republic of Zubrowka, a quirky hotel concierge and his apprentice become embroiled in a series of bizarre adventures involving theft, murder, and a valuable Renaissance painting. Their escapades lead them on a madcap journey through a visually stunning world. In the fictional Republic of Zubrowka, a quirky hotel concierge and his apprentice become embroiled in a series of bizarre adventures involving theft, murder, and a valuable Renaissance painting. Their escapades lead them on a madcap journey through a visually stunning world. In the fictional Republic of Zubrowka, a quirky hotel concierge and his apprentice become embroiled in a series of bizarre adventures involving theft, murder, and a valuable Renaissance painting. Their escapades lead them on a madcap journey through a visually stunning world. In the fictional Republic of Zubrowka, a quirky hotel concierge and his apprentice become embroiled in a series of bizarre adventures involving theft, murder, and a valuable Renaissance painting. Their escapades lead them on a madcap journey through a visually stunning world.",
      genre: "Comedy/Mystery",
      ageRestriction: 17,
      runTime: 100,
      trailerLink: "https://www.youtube.com/embed/1Fg5iWmQjwk",
      posterLink: "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_FMjpg_UX1000_.jpg"
  },
  {
      id: 6,
      title: "Finding Nemo",
      description: "Marlin, a clownfish, embarks on a journey across the ocean to find his son, Nemo, who has been captured by a diver and placed in a fish tank. Along the way, Marlin is joined by a forgetful fish named Dory, and together, they encounter various sea creatures and dangers.",
      genre: "Animation/Family",
      ageRestriction: 0,
      runTime: 100,
      trailerLink: "https://www.youtube.com/embed/wZdpNglLbt8",
      posterLink: "https://m.media-amazon.com/images/M/MV5BYjZlNzkzNzctZTY0NS00YmZhLThjNWMtMTViYWNlM2IyMzZiXkEyXkFqcGdeQXVyODk1MjAxNzQ@._V1_.jpg"
  },
  {
      id: 7,
      title: "The Social Network",
      description: "The film chronicles the founding of Facebook and the legal battles that ensued between its creators. As the social media platform gains immense popularity, friendships are tested, and personal ethics are questioned, leading to a dramatic legal showdown.",
      genre: "Drama/Biography",
      ageRestriction: 13,
      runTime: 120,
      trailerLink: "https://www.youtube.com/embed/lB95KLmpLR4",
      posterLink: "https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmIzMC00MzlmLTg4MGItZWJmMzBhZjE0Mjc1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
  },
  {
      id: 8,
      title: "Spirited Away",
      description: "Chihiro, a young girl, becomes trapped in a mysterious and magical world. To rescue her parents and escape, she must work in a bathhouse run by supernatural beings, encountering strange creatures and undergoing personal growth along the way.",
      genre: "Animation/Fantasy",
      ageRestriction: 0,
      runTime: 125,
      trailerLink: "https://www.youtube.com/embed/ByXuk9QqQkk",
      posterLink: "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
  }
];

console.log("before");
const showingRepository = new ShowingRepository();
/*const movs = repository.getAllMovies();
for (let i = 0; i < movs.length; i++) console.log(movs[i]);*/
const showings = await showingRepository.getAllShowings();
console.log(showings);
/*
for (let i = 0; i < 4; i++) {
  await repository.createShowing(
    {
      "movieId" : i,
      "theaterId" : 1,
      "showingDateTime" : "2023-10-06T15:00:00",
    }
  );
}
*/

console.log("after");



const flexboxContent = document.querySelector('.popular-movies-content');

for (let i = 0; i < movies.length; i++) {
  const divElement = document.createElement('div');
  divElement.className = ` popular-movies-item popular-movies-item-${movies[i].id}`;
  divElement.style.backgroundImage = `url(${movies[i].posterLink})`;
  divElement.innerHTML = `
  <div class="popular-movies-overlay">
    <div class="description">
      <h3>${movies[i].title}</h3>
      <p>${movies[i].description}</p>
      <p><strong>Genre:</strong> ${movies[i].genre}</p>
      <p><strong>Age Restriction:</strong> ${movies[i].ageRestriction}</p>
      <p>Run Time: ${movies[i].runTime} minutes</p>
      <a href="${movies[i].trailerLink}" target="_blank">Watch Trailer</a>
    </div>
    <div class="overlay-textbox">
      <p class="popular-movies-overlay-title">${movies[i].title}</p>
      <p class="popular-movies-overlay-subtitle">${movies[i].description}</p>
    </div>
  </div>  
  `;
  flexboxContent.appendChild(divElement);
}

document.addEventListener('DOMContentLoaded', function() {
    
  const modal = document.getElementById('movieModal');
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

  const flexboxItems = document.querySelectorAll('.popular-movies-item');

  flexboxItems.forEach((flexboxItem, index) => {
      flexboxItem.addEventListener("click", function() {
          // Populate modal with movie details
            document.getElementById('modalPoster').src = movies[index].posterLink;
            document.getElementById('modalTitle').textContent = movies[index].title;
            document.getElementById('modalDescription').textContent = movies[index].description;
            document.getElementById('modalGenre').innerHTML = "<strong>Genre:</strong> " + movies[index].genre;
            document.getElementById('modalAgeRestriction').innerHTML = "<strong>Age:</strong> " + movies[index].ageRestriction;
            document.getElementById('modalRunTime').innerHTML = "<strong>Run time:</strong> " + movies[index].runTime + " minutes";
            document.getElementById('modalTrailer').src = movies[index].trailerLink;

          // Display modal
          modal.style.display = "block";

          // Get the modal
          var movieModal = document.getElementById("movieModal"); 

          var span = document.querySelector("span.close");

          
            // When the user clicks on <span> (x), close the modal
            span.onclick = function(event) {
              console.log("Event handler called");
              if (event.target == modal) {
                console.log("Clicked outside the modal");
                movieModal.style.display = "none";
              }
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