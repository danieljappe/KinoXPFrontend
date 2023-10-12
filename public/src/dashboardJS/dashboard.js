document.addEventListener('DOMContentLoaded', function () {

            // Retrieve employee data from sessionStorage
            
    const employeeData = JSON.parse(window.sessionStorage.getItem('employee'));

    // Get the <section> element by its ID
    const sectionElement = document.querySelector('.div1');

    // Check if employeeData is not null or undefined
    if (employeeData) {
        // Update the content inside the <section> element
        sectionElement.innerHTML = `
            <h1>Logged in as Operator</h1>
            <p><strong>Employee ID:</strong> ${employeeData.employee_id}</p>
            <p><strong>Is operator:</strong> ${employeeData.is_operator}</p>
            <p><strong>Name:</strong> ${employeeData.employee_name}</p>
            <!-- Add more properties as needed -->
        `;
    } else {
        // Handle the case when employeeData is null or undefined
        sectionElement.innerHTML = `<h1>No employee data found!</h1>`;
    }


            // Movie Operations
    baseURL = "https://kino-xp-backend.azurewebsites.net/"
    


        //Get all movies

    getAllMovies = baseURL + "/api/movies/get-all"
    function fetchAndUpdateMovies() {
        fetch(getAllMovies)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                const moviesDiv = document.querySelector('.div3 .viewmovies');
                moviesDiv.innerHTML = data.map(movie => {
                    return `
                        <div class="movieBox">
                            <div class="movieDiv">
                                <div>Movie ID: ${movie.movieId}</div>
                                <div>${movie.title}</div>
                            </div>
                            <div>
                                <a href="#" class="deleteMovieButton" data-movie-id="${movie.imdbID}">Delete</a>
                            </div>
                        </div>`;
                }).join('');
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }

                    
    
                    //Add a movie

    document.getElementById('movieForm').addEventListener('submit', function (event) {
        event.preventDefault();

        // Function to extract the movie ID from the trailer URL
        function extractMovieId(url) {
            // Regular expression to match the movie ID starting with "tt"
            const regex = /\/title\/(tt\d+)\//;
            const match = url.match(regex); // Match the pattern in the URL
            console.log(match);
            console.log(match[1]);
        
            if (match && match[1]) {
                return match[1]; // Return the extracted movie ID
            } else {
                return null; // Return null if no match is found
            }
        }
    
        // Get values from the form fields
        let imdbId = document.querySelector('.addMovieIdInput').value;
        let ageRestriction = document.querySelector('.addMovieInput[name="ageRestriction"]').value;
        let trailerUrl = document.querySelector('.addMovieInput[name="trailerLink"]').value;
        imdbId = extractMovieId(imdbId);

        // Prepare the movie data object
        const movieData = {
            imdbId: imdbId,
            trailerUrl: trailerUrl,
            ageRestriction: ageRestriction
        };
    
        const baseURL = "https://kino-xp-backend.azurewebsites.net/";
        const addMovieEndpoint = baseURL + "/api/movies/";
    
        // Make a POST request to add a new movie
        fetch(addMovieEndpoint + imdbId, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(movieData)
        })
        .then(response => {
            // Check if the request was successful (status code 200)
            if (response.ok) {
                // Movie added successfully
                alert('Movie added successfully!');
                
                imdbId.value = '';
                ageRestriction.value = '';
                trailerUrl.value = '';
            } else {
                // Handle errors if the response status is not OK
                console.error('Movie could not be added.');
                // You can display an error message or perform any other error handling here
            }
        })
        .catch(error => {
            // Handle errors occurred during the fetch operation
            console.error('There has been a problem with your fetch operation:', error);
        });
    });


                    // Delete Movie

        // Add event listener for the parent container (moviesDiv) using event delegation
const moviesDiv = document.querySelector('.div3 .viewmovies');
moviesDiv.addEventListener('click', function(event) {
    const target = event.target;

    // Check if the clicked element has the class 'deleteMovieButton'
    if (target.classList.contains('deleteMovieButton')) {
        event.preventDefault();

        // Get the data-movie-id attribute from the clicked element
        const movieId = target.getAttribute('data-movie-id');
        console.log(`Movie ID ${movieId} clicked for deletion.`);

        // Make a DELETE request to delete the movie with the specified movieId
        const deleteMovieEndpoint = `https://kino-xp-backend.azurewebsites.net/api/movies/${movieId}`;
        fetch(deleteMovieEndpoint, {
            method: 'DELETE'
        })
        .then(response => {
            if (response.ok) {
                // Movie deleted successfully
                console.log(`Movie with ID ${movieId} deleted successfully!`);
                // Reload div
                fetchAndUpdateMovies();
                // Optionally, you can remove the movie box from the DOM here
                target.closest('.movieBox').remove(); // Removes the parent .movieBox element
            } else {
                // Handle errors if the response status is not OK
                console.error('Movie could not be deleted.');
            }
        })
        .catch(error => {
            // Handle errors occurred during the fetch operation
            console.error('There has been a problem with your fetch operation:', error);
        });
    }
});

    



    
    // Get references to the divs in div3
    const defaultShowingDiv = document.querySelector('.div3 .default-showing');
    const viewMoviesDiv = document.querySelector('.div3 .viewmovies');
    const addMoviesDiv = document.querySelector('.div3 .addmovies');

    // Get references to the buttons in div2
    const viewMoviesButton = document.querySelector('.div2 button:nth-child(1)');
    const addMoviesButton = document.querySelector('.div2 button:nth-child(2)');

    // Add click event listeners to the buttons
    viewMoviesButton.addEventListener('click', function () {
        defaultShowingDiv.style.display = 'none';
        viewMoviesDiv.style.display = 'block';
        addMoviesDiv.style.display = 'none';

        fetchAndUpdateMovies();
        
    });

    addMoviesButton.addEventListener('click', function () {
        defaultShowingDiv.style.display = 'none';
        viewMoviesDiv.style.display = 'none';
        addMoviesDiv.style.display = 'block';
    });
});
