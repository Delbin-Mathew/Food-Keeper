// Inventory Management - Add items to inventory
const addItemForm = document.getElementById('add-item-form');
const inventoryList = document.getElementById('inventory-list');

if (addItemForm && inventoryList) {
    addItemForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from refreshing the page

        // Get form data
        const itemName = document.getElementById('item-name').value;
        const expiryDate = document.getElementById('expiry-date').value;

        // Create a new list item
        const listItem = document.createElement('li');
        listItem.textContent = `${itemName} - Expires on: ${expiryDate}`;

        // Add list item to inventory list
        inventoryList.appendChild(listItem);

        // Clear form fields
        addItemForm.reset();
    });
}

// Shopping List Management - Add and remove items
const shoppingListForm = document.getElementById('add-to-shopping-list');
const shoppingList = document.getElementById('shopping-list');

if (shoppingListForm && shoppingList) {
    shoppingListForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from refreshing the page

        // Get item data from input field
        const shoppingItem = document.getElementById('shopping-item').value;

        // Create a new list item with a "Bought" button
        const listItem = document.createElement('li');
        listItem.innerHTML = `${shoppingItem} <button onclick="removeShoppingItem(this)">Bought</button>`;

        // Add list item to the shopping list
        shoppingList.appendChild(listItem);

        // Clear the input field
        shoppingListForm.reset();
    });
}

// Function to remove an item from the shopping list
function removeShoppingItem(button) {
    const listItem = button.parentElement;
    listItem.remove();
}
