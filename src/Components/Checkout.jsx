import React, { useState } from 'react';

const Checkout = ({ cart }) => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setIsSubmitted(true);
      setIsError(false);
    } else {
      setIsError(true);
    }
  };

  const totalBill = cart.reduce((acc, book) => acc + book.price, 0);

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      {isSubmitted ? (
        <p>Purchase done successfully!</p>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <button type="submit">Submit</button>
          </form>
          {isError && <p className="error">Please fill in all fields!</p>}
        </>
      )}
      <p>Total: Rs {totalBill.toFixed(2)}</p>
    </div>
  );
};

export default Checkout;
