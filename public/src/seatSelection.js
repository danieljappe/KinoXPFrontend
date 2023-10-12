//variables
const bigTheatreRows = 25
const bigTheatreSeatsPerRow = 16
const smallTheatreRows = 20
const smallTheatreSeatsPerRow = 12
const blueSeatPrice = 110
const vipSeatPrice = 122
const seatIdContainer = document.querySelector(".seat-id")

let selectedSeatsIDs = []
let selectedSeats = []
let occupiedSeatIds = []
let movieId = 0
let theaterId = 0
let totalPrice = 0

const urlParams = new URLSearchParams(window.location.search);
const showingId = urlParams.get('showingId');

//data the html/Javascript needs to function

//URL for  fetching
const getShowingWithId = "https://kino-xp-backend.azurewebsites.net/showing/showingid/"
const getMovieWithId = "https://kino-xp-backend.azurewebsites.net/api/movies/movie-id/"
const getAllTickets = "https://kino-xp-backend.azurewebsites.net/tickets"
const saveSeatsUrl = "https://kino-xp-backend.azurewebsites.net/ticket"
const addCustomerUrl = "https://kino-xp-backend.azurewebsites.net/customer"

//URL for fetching Locally (this is only for debugging)
// const getShowingWithId = "http://localhost:8080/showing/showingid/"
// const getMovieWithId = "http://localhost:8080/api/movies/movieid/"
// const getAllTickets = "http://localhost:8080/tickets"
// const saveSeatsUrl = "http://localhost:8080/ticket"

//methods to get the shit going
fetchTickets(getAllTickets);

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

async function fetchTickets(fetchUrl) {
    await fetch(fetchUrl)
        .then(result => {
            if (result >= 400) {
                throw new Error();
            }
            return result.json()
        }).then(body => {
        occupiedSeatIds = body.filter(ticket => ticket.showingId == showingId).map(ticket => ticket.seatId);
        console.log("occupied seats ids: " + occupiedSeatIds)
        fetchShowing(getShowingWithId, showingId)
    })
}

function inputMovieInfo(movieBody) {
    const movieName = document.getElementById("movieName")
    const theaterName = document.getElementById("theaterName")
    movieName.innerHTML = movieBody.title
    theaterName.innerHTML = "Theater number: " + theaterId
}

function createSeats(rows, seatsPerRow) {
    const container = document.getElementById("seatDiv")
    const table = document.createElement('table')

    //this 'if' sets the initial value of the first seat. This must match the DB seat table.
    //SO if bigTheatre = true. first seat_id must be 241 according to the seat table
    let seatId
    if (theaterId === 1) {
        seatId = 1;
    } else {
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

            if (i >= rows - 10) {
                seatButton.classList.add("vipSeat")
                seatButton.innerHTML = "<img class='vipSeat' src='/icons/vipSeat.png'/>"
            } else {
                seatButton.classList.add("seat")
                seatButton.innerHTML = "<img class='seat' src='/icons/seat.png'/>"
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
    const seatInfo = "Row: " + row + ", Seat: " + seatNum;
    if (!seatButton.classList.contains("selected")) {
        sideBarTicketManager(seatInfo, true)
        updateTotalPrice(seatButton, true)
        selectedSeatsIDs.push(seatButton.id)
        selectedSeats.push(seatInfo)
        seatButton.classList.toggle('selected')
    } else {
        sideBarTicketManager(seatInfo, false)
        updateTotalPrice(seatButton, false)
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

function sideBarTicketManager(seatInfo, toAdd) {
    if (toAdd) {
        const seatDiv = document.createElement("div")
        seatDiv.classList.add('ticketDiv')
        const ticketNumber = document.createElement("h3")
        ticketNumber.innerText = seatInfo
        seatDiv.appendChild(ticketNumber)
        seatIdContainer.appendChild(seatDiv)
    } else {
        const children = seatIdContainer.children;
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            if (child.innerText.includes(seatInfo)) {
                seatIdContainer.removeChild(child);
                break;
            }
        }
    }
}

function updateTotalPrice(seat, toAdd) {
    if (seat.classList.contains('seat') && toAdd === true) {
        totalPrice = totalPrice + blueSeatPrice //add blue price
    } else if (seat.classList.contains('seat') && toAdd === false) {
        totalPrice = totalPrice - blueSeatPrice //remove blue price
    } else if (seat.classList.contains('vipSeat') && toAdd === true) {
        totalPrice = totalPrice + vipSeatPrice //add vipPrice
    } else if (seat.classList.contains('vipSeat') && toAdd === false) {
        totalPrice = totalPrice - vipSeatPrice //remove vipPrice
    }
    console.log("totalPrice is: " + totalPrice)
}

function saveSelectedSeats(customerPhone) {
    //iterates over the selectedSeatsIDs.length to add one ticket at a time from the list.
    let seatsSaved = 0;
    for (let i = 0; i < selectedSeatsIDs.length; i++) {
        const data = {
            customerPhone: customerPhone,
            showingId: showingId,
            seatId: selectedSeatsIDs[i],
            ticketId: null
        };
        const body = JSON.stringify(data)
        console.log(body)
        fetch(saveSeatsUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: body
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Seats saved successfully:', data);
                seatsSaved++
                if (seatsSaved === selectedSeatsIDs.length) {
                    window.location.reload()
                    alert("Your tickets has been reserved")
                }
            })
            .catch(error => {
                console.error('Error saving seats:', error);
            });
    }
}
function addCustomer(customerPhone){

    const data = {
        customerPhone: customerPhone,
    };
    const body = JSON.stringify(data)
    console.log(body)
    fetch(addCustomerUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: body
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Customer added successfully:', data);
            saveSelectedSeats(customerPhone)
        })
        .catch(error => {
            console.error('Error saving customer:', error);
        });
}

function addPhoneNumber() {
    if (selectedSeatsIDs.length === 0) {
        alert("Click on the seats to reserve them")
    } else {
        let customerPhone = prompt("Total price is " + totalPrice + "kr.\n Please write your phone number to reserve the tickets: ")
        console.log("The phone number : " + customerPhone)
        addCustomer(customerPhone)

    }
}