document.addEventListener('DOMContentLoaded', function() {
    
  const modal = document.getElementById('movieModal');
  const close = document.querySelector('.close');


  window.addEventListener('click', function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }

    if (event.target == loginModal) {
      loginModal.style.display = "none";
    }
  });

  const movieModalCloseBtn = document.querySelector('#movieModal span.close');

  movieModalCloseBtn.addEventListener('click', function(event) {
    if (event.target == movieModalCloseBtn) {
      movieModal.style.display = 'none';
    }
  });

  // Get the <span> element that closes the login modal
  const loginModalCloseBtn = document.querySelector('#myModal span.close');

  loginModalCloseBtn.addEventListener('click', function(event) {
    if (event.target == loginModalCloseBtn) {
      loginModal.style.display = 'none';
    }
  });

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