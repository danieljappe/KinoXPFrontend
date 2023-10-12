document.addEventListener("DOMContentLoaded", function () {
    const drinksContainer = document.getElementById('drinks-container');
    const snacksContainer = document.getElementById('snacks-container');
    const storeList = document.getElementById('store-list');
    const totalElement = document.getElementById('total');
    let total = 0.00;

    // Function to fetch sale items from the backend
    function fetchSaleItems() {
        fetch('/api/sales/sale-items') // Replace with your backend endpoint
            .then(response => response.json())
            .then(data => {
                displaySaleItems(data);
            })
            .catch(error => console.error('Error:', error));
    }

    // Function to display sale items in the frontend
    function displaySaleItems(saleItems) {
        saleItems.forEach(item => {
            createAndDisplayItem(drinksContainer, item);
        });
    }

    // Create and display item
    function createAndDisplayItem(container, item) {
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('flexbox-item');

        const itemName = document.createElement('span');
        itemName.textContent = `${item.saleItemName} - $${item.saleItemPrice.toFixed(2)}`;

        const buyButton = document.createElement('button');
        buyButton.textContent = 'Buy';
        buyButton.addEventListener('click', () => {
            const storeItem = document.createElement('li');
            storeItem.textContent = item.saleItemName;
            storeItem.dataset.cost = item.saleItemPrice;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => {
                storeList.removeChild(storeItem);
                calculateTotal();
            });

            storeItem.appendChild(removeButton);
            storeList.appendChild(storeItem);
            calculateTotal();
        });

        itemContainer.appendChild(itemName);
        itemContainer.appendChild(buyButton);
        container.appendChild(itemContainer);
    }

    function calculateTotal() {
        total = 0.00;
        storeList.querySelectorAll('li').forEach(item => {
            const itemCost = parseFloat(item.dataset.cost);
            if (!isNaN(itemCost)) {
                total += itemCost;
            }
        });
        totalElement.textContent = total.toFixed(2);
    }

    // Fetch sale items when the page loads
    fetchSaleItems();

    // Calculate total
    calculateTotal();
});
