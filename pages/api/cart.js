// pages/api/cart.js

const cartItems = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    // Add more cart items as needed
  ];
  
  export default function handler(req, res) {
    const { method, body } = req;
  
    if (method === 'GET') {
      // Return the cart items
      res.status(200).json(cartItems);
    } else if (method === 'POST') {
      // Add an item to the cart
      const { id, name, price } = body;
      const newItem = { id, name, price };
      cartItems.push(newItem);
      res.status(201).json({ message: 'Item added to the cart.', newItem });
    } else if (method === 'DELETE') {
      // Remove an item from the cart
      const { productId } = body;
      const itemIndex = cartItems.findIndex((item) => item.id === Number(productId));
  
      if (itemIndex === -1) {
        // Item not found
        res.status(404).json({ message: 'Item not found in the cart.' });
      } else {
        // Remove the item from the cartItems array
        const removedItem = cartItems.splice(itemIndex, 1)[0];
        res.status(200).json({ message: 'Item removed from the cart.', removedItem });
      }
    } else {
      // Unsupported method
      res.status(405).json({ message: 'Method not allowed.' });
    }
  }
  