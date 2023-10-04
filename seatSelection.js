function createSeats(rows, seatsPerRow) {
    const container = document.getElementById("seatDiv");

    const table = document.createElement('table');
    table.style.width = '100%';
    table.style.height = '100%';
    table.border = '1';

    for (let i = 1; i <= rows; i++) {
        const row = document.createElement('tr');

        for (let j = 1; j <= seatsPerRow; j++) {
            const seat = document.createElement('td');
            // seat.style.backgroundColor = 'white';
            const seatButton = document.createElement('button');
            seatButton.style.backgroundColor = 'transparent';
            seatButton.style.borderStyle = 'hidden';
            // seatButton.innerText = `R${i}, S${j}`;
            seatButton.innerHTML = "<img style='width: 35px;height: 35px' src='icons/seat.png'/>";
            seatButton.addEventListener('click', () => {
                alert(`Seat ${j} in Row ${i}.`); //For debugging
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