document.addEventListener("DOMContentLoaded", function () {
    const saleItemsContainer = document.getElementById('sale-items-container');
    const storeBucket = document.getElementById('store-bucket');
    const storeList = document.getElementById('store-list');
    const totalAmount = document.getElementById('total');
    const storeItems = []; // To keep track of items in the store bucket

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
        saleItems.forEach(item => {
            createAndDisplayItem(saleItemsContainer, item);
        });
    }

    // Create and display sale item
    function createAndDisplayItem(container, item) {
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('flexbox-item');

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

    // Fetch and display sale items when the page loads
    fetchAndDisplaySaleItems();
    console.log('JavaScript code is executed');
});
