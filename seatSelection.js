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



// function addPhoneNumber() {
//     // const styling = $("#container");
//     // let phoneNumber = styling.prompt("Please connect your phone number : ");
//     let phoneNumber = prompt("Please connect your phone number : ");
//     console.log("The phone number : " + phoneNumber);
// }


//_______________________________________________________________________________________

document.addEventListener('DOMContentLoaded', function() {


    // const flexboxItems = document.querySelectorAll('.flexbox-item');
    //
    // flexboxItems.forEach(flexboxItem => {
    //     const description = flexboxItem.querySelector('.description');
    //
    //     flexboxItem.addEventListener("mouseover", function() {
    //         flexboxItem.style.backgroundColor = "#333";
    //         flexboxItem.style.transition = "background-color 0.6s ease";
    //         flexboxItem.style.cursor = "pointer";
    //         description.style.display = "block";
    //     });
    //
    //     flexboxItem.addEventListener("mouseout", function() {
    //         // Original color
    //         flexboxItem.style.backgroundColor = "";
    //         flexboxItem.style.transition = "background-color 0.3s ease";
    //         description.style.display = "none";
    //     });
    // });

    const loginButton = document.querySelector('.login-button');
    const loginForm = document.querySelector('.login-form');

    loginButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevents the form from being submitted

        if (loginForm.style.display === "none" || loginForm.style.display === "") {
            loginForm.style.display = "block";
        } else {
            loginForm.style.display = "none";
        }
    });

});


var modal = document.getElementById("myNextButton");

// Get the button that opens the modal
var loginLink = document.getElementById("add-phone-link");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the link, open the modal
loginLink.onclick = function(event) {
    event.preventDefault(); // Prevent the default link behavior (navigating to a new page)
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


//CATCH THE PHONE NUMBER
console.log(document.getElementById("phoneNumber").value);