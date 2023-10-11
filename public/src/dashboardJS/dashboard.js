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

    getAllMovies = baseURL + "/api/movies/getAll"
    fetch(getAllMovies)
    .then(response => {
        // Check if the request was successful (status code 200)
        if (response.ok) {
            // Parse the JSON response
            return response.json();
        }
        // Handle errors if the response status is not OK
        throw new Error('Network response was not ok.');
    })
    .then(data => {
        // Update the innerHTML of a div with the received data
        const moviesDiv = document.querySelector('.div3 .viewmovies');
        // Assuming data is an array of movie objects, you can format and display them as needed
        moviesDiv.innerHTML = data.map(movie => {
            return `
                    <div class="movieBox">
                        <div class="movieDiv">
                            <div>Movie ID: ${movie.movieId}</div>
                            <div>${movie.title}</div>
                        </div>
                        <div>
                            <button class="deleteMovieButton" data-movie-id="${movie.movieId}">Delete</button>
                        </div>
                    </div>`;
        }).join('');
    })
    .catch(error => {
        // Handle errors occurred during the fetch operation
        console.error('There has been a problem with your fetch operation:', error);
    });

                    
    
                    //Add a movie

    document.getElementById('movieForm').addEventListener('submit', function (event) {
        event.preventDefault();
    
        // Get values from the form fields
        const imdbId = document.querySelector('.addMovieIdInput').value;
        const ageRestriction = document.querySelector('.addMovieInput[name="ageRestriction"]').value;
        const trailerUrl = document.querySelector('.addMovieInput[name="trailerLink"]').value;
    
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
                // You can update the UI or perform any other actions here
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
                    
    



    
    // Get references to the divs in div3
    const defaultShowingDiv = document.querySelector('.div3 .default-showing');
    const viewMoviesDiv = document.querySelector('.div3 .viewmovies');
    const addMoviesDiv = document.querySelector('.div3 .addmovies');
    const deleteMoviesDiv = document.querySelector('.div3 .deletemovies');

    // Get references to the buttons in div2
    const viewMoviesButton = document.querySelector('.div2 button:nth-child(1)');
    const addMoviesButton = document.querySelector('.div2 button:nth-child(2)');
    const deleteMoviesButton = document.querySelector('.div2 button:nth-child(3)');

    // Add click event listeners to the buttons
    viewMoviesButton.addEventListener('click', function () {
        defaultShowingDiv.style.display = 'none';
        viewMoviesDiv.style.display = 'block';
        addMoviesDiv.style.display = 'none';
        deleteMoviesDiv.style.display = 'none';
        
    });

    addMoviesButton.addEventListener('click', function () {
        defaultShowingDiv.style.display = 'none';
        viewMoviesDiv.style.display = 'none';
        addMoviesDiv.style.display = 'block';
        deleteMoviesDiv.style.display = 'none';
    });

    deleteMoviesButton.addEventListener('click', function () {
        defaultShowingDiv.style.display = 'none';
        viewMoviesDiv.style.display = 'none';
        addMoviesDiv.style.display = 'none';
        deleteMoviesDiv.style.display = 'block';
    });
});
