//hardcoded stuff
const selectedSeatsIDs = [];
const selectedSeats = [];
const bigTheatreRows = 25;
const bigTheatreSeatsPerRow = 16;
// const smallTheatreRows = 20;
// const smallTheatreSeatsPerRow = 12;

//data the html/Javascript needs when requesting
const showingId = 1

//URL for fetching
const fetchShowingWithId = "http://localhost:8080/showing/"
const fetchMovieWithId = "http://localhost:8080/movie/";

fetchShowing()

function fetchShowing() {
    //fetch the showing to access the movieName, showing_date_time, tickets and reservedSeats

    fetch("http://localhost:8080/showing/1")
        .then(result => {
            if (result >= 400) {
                throw new Error();
            }
            return result.json()
        }).then(body => {
        console.log(body)
        // inputMovieInfo(body)
        // const occupiedSeatIds = body.ticketDTOSet.map(ticket => ticket.seatId); //TODO ny fetch skal bruges for at finde occupiedseats
        const occupiedSeatIds = [1,3,10];
        //hent movie_name fra movie_id
        //hent theatre_id fra theater_id
        createSeats(bigTheatreRows, bigTheatreSeatsPerRow, occupiedSeatIds);
    })
}


function inputMovieInfo(showingBody){
    console.log(showingBody)
    const movieName = document.getElementById("movieName")
    const theaterName = document.getElementById("theaterName")
    showingBody.forEach(movie =>{
        // movieName.innerHTML = showing.movieName
        movieName.innerHTML = "{Movie Name}"
        // theaterName.innerHTML = showing.
    })
}

function createSeats(rows, seatsPerRow, occupiedSeatIds) {
    const container = document.getElementById("seatDiv")
    const table = document.createElement('table')
    let seatId = 1;
    for (let i = 1; i <= rows; i++) {
        const row = document.createElement('tr')

        //Creates the row number to the left on the page so customer easily can see what row it is
        const rowNum = document.createElement('td');
        rowNum.textContent = "Row " + i;
        row.appendChild(rowNum);

        for (let j = 1; j <= seatsPerRow; j++) {
            const seat = document.createElement('td')
            const seatButton = document.createElement('button')
            seatButton.id = seatId++
            seatButton.innerHTML = "<img class='seat' src='icons/seat.png'/>"

            if (i >= bigTheatreRows - 10) {
                seatButton.classList.add('vipSeat')}

             if (!occupiedSeatIds.includes(seatId)){
                seatButton.classList.add('seatButton')
                seatButton.addEventListener('click', () => {
                    selectSeat(seatButton, i, j)
                });
            }else {
                seatButton.classList.add('seatButtonOccupied')
            }
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
            selectedSeats.splice(seatToRemoveID,1)
        }
        seatButton.classList.toggle('selected');
    }
    console.log(selectedSeatsIDs)
    console.log(selectedSeats)
}



//POP UP
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