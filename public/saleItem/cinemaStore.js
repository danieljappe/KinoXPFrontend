const movies = [
    [
        {
            id: 1,
            title: "Coca Cola",
            description: "Buy a Coca Cola for refreshing yourself.",
            genre: "Drinks",
            posterLink: "https://www.coca-cola.com/content/dam/onexp/dk/da/home-images/brands-images/coca-cola/DK_coca-cola-original-taste-danmark_750x750.jpg"
        },

        {
            id: 2,
            title: "Fanta",
            description: "Buy a Fanta for fantastic enjoyment.",
            genre: "Drinks",
            posterLink: "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
        },

        {
            id: 3,
            title: "Water Bottle",
            description: "Stay hydrated with a refreshing bottle of water.",
            genre: "Drinks",
            posterLink: "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
        },
        {
            id: 4,
            title: "Popcorn",
            description: "Enjoy classic popcorn for a better movie experience.",
            genre: "Snack",
            posterLink: "https://m.media-amazon.com/images/M/MV5BMTc3NjM4MTY3MV5BMl5BanBnXkFtZTcwODk4Mzg3OA@@._V1_.jpg"
        },
        {
            id: 5,
            title: "Nachos",
            description: "Crunchy nachos, a perfect movie snack choice.",
            genre: "Snack",
            posterLink: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
        },
        {
            id: 6,
            title: "HARIBO Gummies",
            description: "Indulge in delicious HARIBO gummy candies.",
            genre: "Snack",
            posterLink: "https://m.media-amazon.com/images/M/MV5BZjYzNTMzZTAtNzMzOS00ZWRhLTg3MWMtM2NjYmJmZjU4NmFhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMzI3NjY2ODc@._V1_.jpg"
        },
        {
            id: 7,
            title: "Kims Chips",
            description: "Kims chips for a fresh movie enjoyment.",
            genre: "Snack",
            posterLink: "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_FMjpg_UX1000_.jpg"
        },
        {
            id: 8,
            title: "Large Popcorn",
            description: "Enjoy a jumbo-sized popcorn during your movie.",
            genre: "Snack",
            posterLink: "https://example.com/popcorn.jpg"
        }

    ]

];

const flexboxContainer = document.querySelector('.popular-movies-section');
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

document.addEventListener('DOMContentLoaded', function () {

    const modal = document.getElementById('movieModal');
    const close = document.querySelector('.close');


    window.addEventListener('click', function (event) {
        if (event.target == movieModal) {
            movieModal.style.display = 'none';
        }
    });

    close.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    const flexboxItems = document.querySelectorAll('.popular-movies-item');

    flexboxItems.forEach((flexboxItem, index) => {
        flexboxItem.addEventListener("click", function () {
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
            span.onclick = function (event) {
                console.log("Event handler called");
                if (event.target == modal) {
                    console.log("Clicked outside the modal");
                    movieModal.style.display = "none";
                }
            }

            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function (event) {
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

    loginLink.onclick = function (event) {
        event.preventDefault(); // Prevent the default link behavior (navigating to a new page)
        loginModal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        loginModal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
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

    loginButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevents the form from being submitted
        toggleElement(loginForm);
    });

});