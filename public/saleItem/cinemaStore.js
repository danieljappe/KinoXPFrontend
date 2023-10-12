document.addEventListener("DOMContentLoaded", function () {
    const saleItemsContainer = document.getElementById('sale-items-container');

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
                // Display sale items
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

        itemContainer.appendChild(itemName);
        container.appendChild(itemContainer);
    }

    // Fetch and display sale items when the page loads
    fetchAndDisplaySaleItems();
    console.log('JavaScript code is executed');
});
