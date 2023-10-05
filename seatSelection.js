function createSeats(rows, seatsPerRow) {
    const container = document.getElementById("seatDiv");
    const table = document.createElement('table');

    for (let i = 1; i <= rows; i++) {
        const row = document.createElement('tr');

        for (let j = 1; j <= seatsPerRow; j++) {
            const seat = document.createElement('td');
            const seatButton = document.createElement('button');
            seatButton.classList.add('seatButton')
            seatButton.innerHTML = "<img class='seat' src='icons/seat.png'/>";
            seatButton.addEventListener('click', () => {
                selectSeat(seatButton, i, j)
            });
            seat.appendChild(seatButton);
            row.appendChild(seat);
        }
        table.appendChild(row);
    }
    container.appendChild(table);
}
function selectSeat(seatButton, row, seat){
    const seatInfo = "row" + row + ", seat" + seat;
    if (!seatButton.classList.contains("selected")) {
        selectedSeats.push(seatInfo)
        seatButton.classList.toggle('selected')
    } else {
        const seatToRemove = selectedSeats.indexOf(seatInfo)
        if (seatToRemove !== -1){
            selectedSeats.splice(seatToRemove, 1)
        }
        seatButton.classList.toggle('selected');
    }
    console.log(selectedSeats)
}

const selectedSeats = [];
const smallTheatreRows = 20;
const smallTheatreSeatsPerRow = 12;
const bigTheatreRows = 25;
const bigTheatreSeatsPerRow = 16;
// createSeats(smallTheatreRows, smallTheatreSeatsPerRow);
createSeats(bigTheatreRows, bigTheatreSeatsPerRow);

//POP UP
// document.getElementById("clickable").onclick = () => {
//
// }
// loginLink.onclick = function(event) {
//     var popup = document.getElementById("myPopup");
//     popup.classList.toggle("show");
// }

function addPhoneNumber() {
    // const styling = $("#container");
    // let phoneNumber = styling.prompt("Please connect your phone number : ");
    let phoneNumber = prompt("Please connect your phone number : ");
    console.log("The phone number : " + phoneNumber);
}