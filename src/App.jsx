import React, { useState } from 'react';
import AdminPanel from './Components/AdminPanel';
import BookList from './Components/BookList';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import './App.css';

const App = () => {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const addToCart = (book) => {
    setCart([...cart, book]);
  };

  const removeFromCart = (book) => {
    setCart(cart.filter((item) => item !== book));
  };

  return (
    <div className="app">
      <h1>Online Book Shopping</h1>
      <AdminPanel addBook={addBook} />
      <BookList books={books} addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} />
      <Checkout cart={cart} />
    </div>
  );
};

export default App;
