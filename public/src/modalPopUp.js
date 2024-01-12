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




//Cancel reservation
// Add event listener to cancel button
const cancelReservationButton = document.querySelector('.cancel-button');
const cancelForm = document.querySelector('.cancel-form');

var cancelModel = document.getElementById("myCancelModal");
// Get the button that opens the modal
var cancelLink = document.getElementById("cancel-reservation");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("cancelClose")[0];
// When the user clicks on the link, open the modal
cancelLink.onclick = function(event) {
    event.preventDefault(); // Prevent the default link behavior (navigating to a new page)
    cancelModel.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    cancelModel.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == cancelModel) {
        cancelModel.style.display = "none";
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







let phoneNumber = document.getElementById("customerPhoneNumber");

function showReservations() {
    fetch(`https://kino-xp-backend.azurewebsites.net/tickets/phone/${phoneNumber.value}`, {
        method: 'GET',
        headers: {'content-type': 'application/json'}
    })
        .then(res => res.json())
        .then(ticketData => {
            //todo add method here that runs the foreach loop
            createTickets(ticketData)
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function createTickets(ticketData) {
    //Emil
    const tickets = document.getElementById("ticketBody")
    tickets.innerHTML = ""
    ticketData.forEach(ticket => {
        const row = document.createElement('tr')

        const ticketIdCell = document.createElement('td');
        ticketIdCell.textContent = ticket.ticketId;
        row.appendChild(ticketIdCell);

        const showingIdCell = document.createElement('td');
        showingIdCell.textContent = ticket.showingId;
        row.appendChild(showingIdCell);

        const seatIdCell = document.createElement('td');
        seatIdCell.textContent = ticket.seatId;
        row.appendChild(seatIdCell);

        const cancelButtonCell = document.createElement('td');
        const cancelButton = document.createElement('button');
        cancelButton.textContent = "Cancel";
        cancelButton.classList="addMovieBackBtn"
        cancelButton.onclick = function(){
            deleteTicket(ticket.ticketId)
        }
        cancelButtonCell.appendChild(cancelButton)
        row.appendChild(cancelButton);
        tickets.appendChild(row);
    })
}

function deleteTicket(ticketId) {
    fetch(`https://kino-xp-backend.azurewebsites.net/ticket/delete/${ticketId}`, {
        method: 'DELETE',
        // headers: {'content-type': 'application/json'}
    })
        .then(response => {
            if (response.ok) {
                // Ticket deleted successfully, update the list
                showReservations();
            } else {
                console.error('Error:', response.status);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}