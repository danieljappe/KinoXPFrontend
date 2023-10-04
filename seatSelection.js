/* Sudo code:
When button is clicked -> Pop up with phone number needed
->
take all selected seats and turn them into reserved
->
Back to home

*/
function createSeatSelector(rows, seatsPerRow) {
    const container = document.getElementById("seatDiv");
    // const img = document.createElement("img")
    // img.src = "seat.png"

    const table = document.createElement('table');
    table.style.width = '100%';
    table.style.height = '100%';
    table.border = '1';

    for (let i = 1; i <= rows; i++) {
        const row = document.createElement('tr');

        for (let j = 1; j <= seatsPerRow; j++) {
            const seat = document.createElement('td');
            seat.style.backgroundColor = 'white';
            const seatButton = document.createElement('button');
            seatButton.style.backgroundColor = 'transparent';
            seatButton.style.borderStyle = 'hidden';
            // seatButton.innerText = `R${i}, S${j}`;
            seatButton.innerHTML = "<img style='width: 50px;height: 50px' src='icons/seat.png'/>";
            seatButton.addEventListener('click', () => {
                alert(`You selected Seat ${j} in Row ${i}.`);
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
// createSeatSelector(smallTheatreRows, smallTheatreSeatsPerRow);
createSeatSelector(bigTheatreRows, bigTheatreSeatsPerRow);

//POP UP
// document.getElementById("clickable").onclick = () => {
//
// }
loginLink.onclick = function(event) {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}