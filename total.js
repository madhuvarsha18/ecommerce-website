let totalCost = 0; 
function addToCart(productName,word, price) {
     // Get the cart items list and total cost display 
    const cartItemsList = document.getElementById('cart-items');
    const totalCostDisplay = document.getElementById('total-cost');
    // Create a new list item with product name and price 
     const listItem = document.createElement('li');
    listItem.className = 'cart-item'; 
    listItem.textContent = `${productName} ${word} - $${price.toFixed(2)}`;
    // Append the new item to the cart
    cartItemsList.appendChild(listItem);
     // Update the total cost 
     totalCost += price; 
     totalCostDisplay.textContent = totalCost.toFixed(2); 
}