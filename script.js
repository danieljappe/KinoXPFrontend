
const movies = [
  { id: 1, title: 'Film 1', description: 'Description for item 1.', imageURL: "url1" },
  { id: 2, title: 'Film 2', description: 'Description for item 2.', imageURL: "url2" },
  { id: 3, title: 'Film 3', description: 'Description for item 3.', imageURL: "url3" },
  { id: 4, title: 'Film 4', description: 'Description for item 4.', imageURL: "url4" },
  { id: 5, title: 'Film 5', description: 'Description for item 5.', imageURL: "url5" },
  { id: 6, title: 'Film 6', description: 'Description for item 6.', imageURL: "url6" },
  { id: 7, title: 'Film 7', description: 'Description for item 7.', imageURL: "url7" },
  { id: 8, title: 'Film 8', description: 'Description for item 8.', imageURL: "url8" }
];
const flexboxContainer = document.querySelector('.flexbox-container');
const flexboxContent = document.getElementById('flexboxContent');

movies.forEach(movie => {
  const divElement = document.createElement('div');
  divElement.className = `flexbox-item flexbox-item-${movie.id}`;

  const h1Element = document.createElement('h1');
  h1Element.textContent = movie.title;

  const imgElement = document.createElement('img');
  imgElement.src = movie.imageUrl; // Set the image source to the movie's imageUrl
  imgElement.alt = movie.title; // Set the alt attribute for accessibility

  const spanElement = document.createElement('span');
  spanElement.className = 'description';

  const pElement = document.createElement('p');
  pElement.textContent = movie.description;

  spanElement.appendChild(pElement);
  divElement.appendChild(h1Element);
  divElement.appendChild(imgElement); // Append the image element
  divElement.appendChild(spanElement);

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




