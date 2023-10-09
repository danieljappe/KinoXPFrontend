//variables
const bigTheatreRows = 25
const bigTheatreSeatsPerRow = 16
const smallTheatreRows = 20
const smallTheatreSeatsPerRow = 12

let selectedSeatsIDs = []
let selectedSeats = []
let occupiedSeatIds = []
let movieId = 0
let theaterId = 0

//data the html/Javascript needs to function
const showingId = 2


//URL for fetching
const getShowingWithId = "http://localhost:8080/showing/"
const getMovieWithId = "http://localhost:8080/movie/"
const getAllTickets = "http://localhost:8080/tickets"

//methods to get the shit going
fetchTickets(getAllTickets)
fetchShowing(getShowingWithId, showingId)

function fetchShowing(fetchUrl, id) {
    fetch(fetchUrl + id)
        .then(result => {
            if (result >= 400) {
                throw new Error();
            }
            return result.json()
        }).then(body => {
        console.log(body)
        movieId = body.movieId
        theaterId = body.theaterId
        fetchMovie(getMovieWithId, movieId)

        //this 'if' creates the amount of seats based on the theaterID
        if (theaterId === 1) {
            createSeats(smallTheatreRows, smallTheatreSeatsPerRow)
        } else {
            createSeats(bigTheatreRows, bigTheatreSeatsPerRow)
        }
    })
}

function fetchMovie(fetchUrl, id) {
    fetch(fetchUrl + id)
        .then(result => {
            if (result >= 400) {
                throw new Error();
            }
            return result.json()
        }).then(body => {
        console.log(body)
        inputMovieInfo(body)
    })
}

function fetchTickets(fetchUrl) {
    fetch(fetchUrl)
        .then(result => {
            if (result >= 400) {
                throw new Error();
            }
            return result.json()
        }).then(body => {
        occupiedSeatIds = body.filter(ticket => ticket.showingId === showingId).map(ticket => ticket.seatId);
        console.log("occupied seats ids: " + occupiedSeatIds)
    })
}


function inputMovieInfo(movieBody) {
    const movieName = document.getElementById("movieName")
    const theaterName = document.getElementById("theaterName")
    movieName.innerHTML = "Movie name: " + movieBody.movieName
    theaterName.innerHTML = "Theater number: " + theaterId
}

function createSeats(rows, seatsPerRow) {
    const container = document.getElementById("seatDiv")
    const table = document.createElement('table')

    //this 'if' sets the initial value of the first seat. This must match the DB seat table.
    //SO if bigTheatre = true. first seat_id must be 241 according to the seat table
    let seatId
    if (theaterId === 1){
        seatId = 1;
    }else {
        seatId = 241;
    }

    for (let i = 1; i <= rows; i++) {
        const row = document.createElement('tr')

        //Creates the row number to the left on the page so customer easily can see what row it is
        const rowNum = document.createElement('td');
        rowNum.textContent = "Row " + i;
        row.appendChild(rowNum);

        for (let j = 1; j <= seatsPerRow; j++) {
            const seat = document.createElement('td')
            const seatButton = document.createElement('button')
            seatButton.innerHTML = "<img class='seat' src='icons/seat.png'/>"

            if (i >= rows - 10) {
                seatButton.classList.add('vipSeat')
            }

            if (!occupiedSeatIds.includes(seatId)) {
                seatButton.classList.add('seatButton')
                seatButton.addEventListener('click', () => {
                    selectSeat(seatButton, i, j)
                });
            } else {
                seatButton.classList.add('seatButtonOccupied')
            }
            seatButton.id = seatId++
            seat.appendChild(seatButton)
            row.appendChild(seat)
        }
        table.appendChild(row)
    }
    container.appendChild(table)
}

function selectSeat(seatButton, row, seatNum) {
    const seatInfo = row + "-" + seatNum;
    if (!seatButton.classList.contains("selected")) {
        selectedSeatsIDs.push(seatButton.id)
        selectedSeats.push(seatInfo)
        seatButton.classList.toggle('selected')
    } else {
        const seatToRemoveID = selectedSeatsIDs.indexOf(seatButton.id)
        if (seatToRemoveID !== -1) {
            selectedSeatsIDs.splice(seatToRemoveID, 1)
            selectedSeats.splice(seatToRemoveID, 1)
        }
        seatButton.classList.toggle('selected');
    }
    console.log(selectedSeatsIDs)
    console.log(selectedSeats)
}
function saveSelectedSeats(){
    //TODO
    //TODO save selectedSeatsIDs with customerPhone, showingId, seat_id
}


// document.getElementById("clickable").onclick = () => {
//
// }
// loginLink.onclick = function(event) {
//     var popup = document.getElementById("myPopup");
//     popup.classList.toggle("show");
// }

function addPhoneNumber() {
    // const styling = $("#container")
    // let phoneNumber = styling.prompt("Please connect your phone number : ")
    let phoneNumber = prompt("Please connect your phone number : ")
    console.log("The phone number : " + phoneNumber)
}