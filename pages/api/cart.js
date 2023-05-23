export default function handler(req, res) {
    const { productId } = req.body;
  
    // TODO: Implement logic to remove the product from the cart based on the productId
    // For example, you can update the cartItems array to remove the matching product
  
    const cartItems = [
      { id: 1, name: 'Product 1', price: 10 },
      { id: 2, name: 'Product 2', price: 20 },
      // Add more cart items as needed
    ];
  
    res.status(200).json(cartItems);
  }
  