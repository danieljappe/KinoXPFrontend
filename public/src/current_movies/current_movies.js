export default class CurrentMovies {
    movies;

    constructor(movies) {
        this.movies = movies;
    }


    _toEmbeddedLink = (link) => {
        //This function adds support, so the embedder authorizes the link
        //from: https://www.youtube.com/watch?v=-FZ-pPFAjYY&ab_channel=FilmSelectTrailer
        //to:   https://www.youtube.com/embed/-FZ-pPFAjYY
        const url = "https://www.youtube.com/embed/";
        const id = link.split("=")[1].split("&")[0];
        return url + id;
    }

    show = async () => {
        const flexboxContent = document.querySelector('.popular-movies-content');
        const modal = document.getElementById('movieModal');
        const self = this;
        for (let i = 0; i < this.movies.length; i++) {
            const divElement = document.createElement('div');
            divElement.className = ` popular-movies-item popular-movies-item-${this.movies[i].id}`;
            divElement.style.backgroundImage = `url(${this.movies[i].poster})`;
            divElement.innerHTML = `
                <div class="popular-movies-overlay">
                    <div class="description">
                        <h3>${this.movies[i].title}</h3>
                        <p>${this.movies[i].plot}</p>
                        <p><strong>Genre:</strong> ${this.movies[i].genre}</p>
                        <p><strong>Age Restriction:</strong> ${this.movies[i].rated}</p>
                        <p>Run Time: ${this.movies[i].runtime} minutes</p>
                        <a href="${this.movies[i].trailerURL}" target="_blank">Watch Trailer</a>
                    </div>
                    <div class="overlay-textbox">
                        <p class="popular-movies-overlay-title">${this.movies[i].title}</p>
                        <p class="popular-movies-overlay-subtitle">${this.movies[i].plot}</p>
                    </div>
                </div>    
            `;
            (function (index) {
                divElement.addEventListener("click", function() {
                    window.addEventListener('click', (event) => {if (event.target == movieModal) movieModal.style.display = 'none'});
                
                    close.onclick = () => modal.style.display = "none";
                
                    window.onclick = (event) => {if (event.target == modal) modal.style.display = "none"};
                    // Populate modal with movie details
                    document.getElementById('modalPoster').src = self.movies[index].poster;
                    document.getElementById('modalTitle').textContent = self.movies[index].title;
                    document.getElementById('modalDescription').textContent = self.movies[index].plot;
                    document.getElementById('modalTrailer').src = self._toEmbeddedLink(self.movies[index].trailerURL);
                    modal.style.display = "block";
            })})(i);
            flexboxContent.appendChild(divElement);
            if (i == 7) break; //allow max 8 movies
        }
    }
} export { CurrentMovies as CurrentMovies };