export default class ElementMaker {
    
    //Makes a button
    getButton = function(className, showingId, text, isDetails, showing, isEdit) {
        const button = document.createElement('button'); 
        className != null? button.className = className : null;
        button.innerText = text;
        const self = this;
        const modal = document.getElementById('movieModal');
        button.addEventListener('click', function() {
            if (showingId !== -1 && showingId != null) {
                window.location.href = "./html/reserveSeats.html?showingId=" + showingId;
            } else if (isDetails) {
                window.addEventListener('click', (event) => {if (event.target == movieModal) movieModal.style.display = 'none'});
            
                close.onclick = () => modal.style.display = "none";
            
                window.onclick = (event) => {if (event.target == modal) modal.style.display = "none"};

                // Populate modal with movie details
                document.getElementById('modalPoster').src = showing.movie.poster;
                document.getElementById('modalTitle').textContent = showing.movie.title;
                document.getElementById('modalDescription').textContent = showing.movie.plot;
                document.getElementById('modalTrailer').src = self._toEmbeddedLink(showing.movie.trailerURL);
                modal.style.display = "block";
            } else if (isEdit) {
                
            }
        });
        return button;
    }

    _toEmbeddedLink = (link) => {
        //This function adds support, so the embedder authorizes the link
        //from: https://www.youtube.com/watch?v=-FZ-pPFAjYY&ab_channel=FilmSelectTrailer
        //to:   https://www.youtube.com/embed/-FZ-pPFAjYY
        const url = "https://www.youtube.com/embed/";
        const id = link.split("=")[1].split("&")[0];
        return url + id;
    }

    //Makes a p-tag
    getP = function(className, text) {
        const p = document.createElement('p');
        className != null? p.className = className : null;
        p.innerText = text;
        return p;
    }

    //makes a div with a potential class name
    getDiv = function(className) {
        const div = document.createElement('div');
        className != null? div.className = className : null;
        return div;
    }

}