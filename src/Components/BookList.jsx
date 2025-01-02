import React from 'react';

const BookList = ({ books, addToCart }) => {
  return (
    <div className="book-list">
      <h2>Available Books</h2>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        books.map((book, index) => (
          <div key={index} className="book-item">
            <h3>{book.name}</h3>
            <p>Rs {book.price}</p>
            <button onClick={() => addToCart(book)}>Add to Cart</button>
          </div>
        ))
      )}
    </div>
  );
};

export default BookList;
