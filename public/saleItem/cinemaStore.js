document.addEventListener("DOMContentLoaded", function () {
    // JavaScript to define fixed items and their costs
    const drinksContainer = document.getElementById('drinks-container');
    const snacksContainer = document.getElementById('snacks-container');
    const storeList = document.getElementById('store-list');
    const totalElement = document.getElementById('total');
    let total = 0.00;

    // Define fixed items and their costs
    const drinks = [
        { name: 'water', cost: 1},
        { name: 'Coca Cola', cost: 2 },
        { name: 'Fanta', cost: 2 },
        { name: 'Red Bull', cost: 4 },
        // Add more drink items here
    ];

    const snacks = [
        { name: 'Popcorn', cost: 2 },
        { name: 'LargePopcorn', cost: 3 },
        { name: 'Haribo bag', cost: 1 },
        { name: 'nachos', cost: 4 },
        { name: 'Chips', cost: 2 },
        // Add more snack items here
    ];

    // Create and display drink items
    drinks.forEach(item => {
        createAndDisplayItem(drinksContainer, item);
    });

    // Create and display snack items
    snacks.forEach(item => {
        createAndDisplayItem(snacksContainer, item);
    });

    function createAndDisplayItem(container, item) {
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('flexbox-item');

        const itemName = document.createElement('span');
        itemName.textContent = `${item.name} - $${item.cost.toFixed(2)}`;

        const buyButton = document.createElement('button');
        buyButton.textContent = 'Buy';
        buyButton.addEventListener('click', () => {
            const storeItem = document.createElement('li');
            storeItem.textContent = item.name;
            storeItem.dataset.cost = item.cost;

            // Add a Remove button to the store item
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
        // Calculate the total cost
        total = 0.00;
        storeList.querySelectorAll('li').forEach(item => {
            const itemCost = parseFloat(item.dataset.cost);
            if (!isNaN(itemCost)) {
                total += itemCost;
            }
        });
        totalElement.textContent = total.toFixed(2);
    }

    calculateTotal();
});
