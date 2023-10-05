// Selected seats by user
const selectedSeats = [];

function createSeats(rows, seatsPerRow) {
    const container = document.getElementById("seatDiv");
    const maxSelectedSeats = 12;

    const table = document.createElement('table');
    table.style.width = '100%';
    table.style.height = '100%';
    table.border = '1';

    for (let i = 1; i <= rows; i++) {
        const row = document.createElement('tr');

        for (let j = 1; j <= seatsPerRow; j++) {
            const seat = document.createElement('td');
            const seatButton = document.createElement('button');
            seatButton.style.backgroundColor = 'transparent';
            seatButton.style.borderStyle = 'hidden';
            seatButton.innerHTML = "<img style='width: 35px;height: 35px' src='icons/seat.png'/>";

            seatButton.addEventListener('click', () => {
                if (selectedSeats.length < maxSelectedSeats) {
                    seatButton.style.backgroundColor = 'green';
                    // Add to array of selected seats
                    selectedSeats.push({ row: i, seat: j });

                    const seatIdContainer = document.querySelector(".seat-id");

                    const seatDiv = document.createElement("div");
                    const ticketNumber = document.createElement("h3");
                    ticketNumber.innerText = "Ticket " + selectedSeats.length; 
                            
                    const seatInfo = document.createElement("p"); 
                    seatInfo.innerText = "Row: " + i + " Seat: " + j;
                            
                    seatDiv.appendChild(ticketNumber);
                    seatDiv.appendChild(seatInfo);
                            
                    seatIdContainer.appendChild(seatDiv);
                } else {
                    //TODO: Need to be able to unselect seats
                    alert('You can select up to 12 seats.');
                }
            });

            seat.appendChild(seatButton);
            row.appendChild(seat);
        }
        table.appendChild(row);
    }
    container.appendChild(table);
}

// Call the function to create the seat selector table
const smallTheatreRows = 20;
const smallTheatreSeatsPerRow = 12;
const bigTheatreRows = 25;
const bigTheatreSeatsPerRow = 16;
// createSeatSeats(smallTheatreRows, smallTheatreSeatsPerRow);
createSeats(bigTheatreRows, bigTheatreSeatsPerRow);
// createSeatSelector(smallTheatreRows, smallTheatreSeatsPerRow);
createSeatSelector(bigTheatreRows, bigTheatreSeatsPerRow);

//POP UP
// document.getElementById("clickable").onclick = () => {
//
// }
// loginLink.onclick = function(event) {
//     var popup = document.getElementById("myPopup");
//     popup.classList.toggle("show");
// }


    const seatModal = document.getElementById("seatModal");

    //TODO: selectedSeats duplicates when opened again
    function openPopup() {
        const seatModal = document.getElementById("seatModal");
        seatModal.style.display = "block";

    }

    function closePopup() {
        const seatModal = document.getElementById("seatModal");
        seatModal.style.display = "none";
    }