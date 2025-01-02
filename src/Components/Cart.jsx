import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
  const totalBill = cart.reduce((acc, book) => acc + book.price, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map((book, index) => (
              <li key={index}>
                {book.name} - Rs {book.price}
                <button onClick={() => removeFromCart(book)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total Bill: Rs {totalBill.toFixed(2)}</p>
        </>
      )}
    </div>
  );
};

export default Cart;
