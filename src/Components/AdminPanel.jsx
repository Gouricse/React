import React, { useState } from 'react';

const AdminPanel = ({ addBook }) => {
  const [bookName, setBookName] = useState('');
  const [bookPrice, setBookPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bookName && bookPrice) {
      addBook({ name: bookName, price: parseFloat(bookPrice) });
      setBookName('');
      setBookPrice('');
    }
  };


  return (
    <div className="admin-panel">
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book Name"
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Book Price"
          value={bookPrice}
          onChange={(e) => setBookPrice(e.target.value)}
          required
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AdminPanel;
