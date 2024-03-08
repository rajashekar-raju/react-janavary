import React, { useState } from 'react';

function ShoppingCart() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
  ]);
  const [cartItems, setCartItems] = useState([]);

  const handleAddItem = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleRemoveItem = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  return (
    <div className="container">
      <h2>Products</h2>
      <ul className="products">
        {products.map((product) => (
          <li key={product.id} className="item">
            {product.name}
            <button onClick={() => handleAddItem(product)}>Add Item</button>
          </li>
        ))}
      </ul>

      <h2>Cart</h2>
      <div className="cart">
        {cartItems.length > 0 ? (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        ) : (
          <p>There are no items in the cart.</p>
        )}
      </div>
    </div>
  );
}

export default ShoppingCart;
