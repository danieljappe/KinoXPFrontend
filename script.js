const movies = [
    { id: 1, title: "Item 1" },
    { id: 2, title: "Item 2" },
    { id: 3, title: "Item 3" },
    { id: 4, title: "Item 4" },
    { id: 5, title: "Item 5" },
    { id: 6, title: "Item 6" },
    { id: 7, title: "Item 7" },
    { id: 8, title: "Item 8" }
  ];

const flexboxContainer = document.querySelector('.flexbox-container');
const flexboxContent = document.querySelector('.flexbox-content');

movies.forEach(movie => {
  const divElement = document.createElement('div');
  divElement.className = `flexbox-item flexbox-item-${movie.id}`;
  divElement.textContent = movie.title;
  flexboxContent.appendChild(divElement);
});

document.addEventListener('DOMContentLoaded', function() {


    const flexboxItems = document.querySelectorAll('.flexbox-item');

    flexboxItems.forEach(flexboxItem => {
        const description = flexboxItem.querySelector('.description');

        flexboxItem.addEventListener("mouseover", function() {
            flexboxItem.style.backgroundColor = "#333";
            flexboxItem.style.transition = "background-color 0.6s ease";
            flexboxItem.style.cursor = "pointer";
            description.style.display = "block";
        });

        flexboxItem.addEventListener("mouseout", function() {
            // Original color
            flexboxItem.style.backgroundColor = "";
            flexboxItem.style.transition = "background-color 0.3s ease";
            description.style.display = "none";
        });
    });

    const loginButton = document.querySelector('.cancel-button');
    const loginForm = document.querySelector('.cancel-form');

    loginButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevents the form from being submitted

        if (loginForm.style.display === "none" || loginForm.style.display === "") {
            loginForm.style.display = "block";
        } else {
            loginForm.style.display = "none";
        }
    });

    //TODO Cancel reservation
    const cancelReservationButton = document.querySelector('.cancel-button');
    const cancelForm = document.querySelector('.cancel-form');

    cancelReservationButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevents the form from being submitted

        if (cancelForm.style.display === "none" || cancelForm.style.display === "") {
            cancelForm.style.display = "block";
        } else {
            cancelForm.style.display = "none";
        }
    });
    
});

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var loginLink = document.getElementById("login-link");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the link, open the modal
loginLink.onclick = function(event) {
    event.preventDefault(); // Prevent the default link behavior (navigating to a new page)
    modal.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  //Seat reservation stuff
console.log(document.getElementById("phoneNumber").value);


//TODO CANCEL RESERVATION
var cancelModal = document.getElementById("myCancelModal");

// Get the button that opens the modal
var cancelLink = document.getElementById("cancel-link");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the link, open the modal
cancelLink.onclick = function(event) {
    event.preventDefault(); // Prevent the default link behavior (navigating to a new page)
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modal = document.getElementById("myCancelModal");

// Get the button that opens the modal
var cancelLink = document.getElementById("cancel-reservation");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the link, open the modal
cancelLink.onclick = function(event) {
    event.preventDefault(); // Prevent the default link behavior (navigating to a new page)
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




