document.addEventListener('DOMContentLoaded', () => {
    const shoppingList = document.getElementById('shopping-list');
    const addToListForm = document.getElementById('add-to-shopping-list');

    addToListForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const itemName = document.getElementById('item').value;

        const listItem = document.createElement('li');
        listItem.innerHTML = `${itemName} <button onclick="removeItem(this)">Bought</button>`;

        shoppingList.appendChild(listItem);
        addToListForm.reset();
    });
});

function removeItem(button) {
    const listItem = button.parentElement;
    listItem.remove();
}
