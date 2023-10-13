document.addEventListener("DOMContentLoaded", function () {
    const saleItemsContainer = document.getElementById('sale-items-container');
    const storeList = document.getElementById('store-list');
    const totalAmount = document.getElementById('total');
    const storeItems = []; // To keep track of items in the store bucket
    const purchaseButton = document.getElementById('purchase-button');

    // Function to fetch and display sale items
    function fetchAndDisplaySaleItems() {
        fetch('http://localhost:5555/api/sales/sale-items')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                displaySaleItems(data);
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }

    // Function to display sale items
    function displaySaleItems(saleItems) {
        saleItems.forEach((item, index) => {
            createAndDisplayItem(saleItemsContainer, item, index);
        });
    }

// Create and display sale item
    function createAndDisplayItem(container, item, index) {
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('flexbox-item');

        // Set the background image using CSS
        itemContainer.style.backgroundImage = `url('${item.posterPicture}')`;

        const itemName = document.createElement('span');
        itemName.textContent = `${item.saleItemName} - $${item.saleItemPrice.toFixed(2)}`;

        const buyButton = document.createElement('button');
        buyButton.textContent = 'Buy';
        buyButton.addEventListener('click', () => addToBucket(item)); // Add a click event listener

        itemContainer.appendChild(itemName);
        itemContainer.appendChild(buyButton);
        container.appendChild(itemContainer);
    }


    // Function to handle "Buy" button click event
    function addToBucket(item) {
        // Add the item to the store bucket
        storeItems.push(item);

        // Update the store list
        const listItem = document.createElement('li');
        listItem.textContent = `${item.saleItemName} - $${item.saleItemPrice.toFixed(2)}`;
        storeList.appendChild(listItem);

        // Update the total amount
        updateTotalAmount();

        // You can also add a "Remove" button to allow removing items from the bucket
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => removeItem(item, listItem));
        listItem.appendChild(removeButton);
    }

    // Function to remove an item from the store bucket
    function removeItem(item, listItem) {
        const itemIndex = storeItems.indexOf(item);
        if (itemIndex !== -1) {
            storeItems.splice(itemIndex, 1);
            storeList.removeChild(listItem);
            updateTotalAmount();
        }
    }

    // Function to update the total amount
    function updateTotalAmount() {
        const total = storeItems.reduce((total, item) => total + item.saleItemPrice, 0);
        totalAmount.textContent = total.toFixed(2);
    }

    fetchAndDisplaySaleItems();
    console.log('JavaScript code is executed');


// Add an event listener to the "Purchase" button
    // ... Your previous JavaScript code ...

// Add an event listener to the "Purchase" button
    purchaseButton.addEventListener('click', function () {
        const customerPhone = prompt('Please enter your customer number:');
        if (customerPhone !== null) {
            const customerNumberInt = parseInt(customerPhone);
            if (!isNaN(customerNumberInt)) {
                const saleDateInput = document.getElementById('saleDateInput'); // Get the sale date input element
                const saleDate = saleDateInput.value; // Get the selected sale date
                if (saleDate) {
                    // Here you can implement the purchase logic
                    const purchaseMessage = `Purchase is done by customer number: ${customerPhone} and the sale date is: ${saleDate}.`;
                    alert(purchaseMessage);
                    // You can also send a request to your backend to record the purchase
                    // and provide more advanced functionality as needed.
                } else {
                    alert('Please select a sale date.');
                }
            } else {
                alert('Invalid customer number. Please enter a valid integer.');
            }
        } else {
            alert('Purchase canceled. Please enter a customer number to complete the purchase.');
        }
    });
});




