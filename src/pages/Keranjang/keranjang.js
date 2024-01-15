import React, { useState } from 'react';
import styled from 'styled-components';
import '../../CSS/Keranjang/keranjang.css';
import { Link } from 'react-router-dom';

const AppWrapper = styled.div`
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
`;

const Header = () => {
  return (
    <header>
      <h1>Keranjang</h1>
    </header>
  );
};

const CartItem = ({ item, decreaseQuantity, increaseQuantity }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="item-details">
        <h2>{item.name}</h2>
        <p><b>Harga: Rp.{item.price.toFixed(2)}</b></p>
        <div className="quantity">
          <button className="quantity-btn" onClick={decreaseQuantity}>
            -
          </button>
          <span className="quantity-value">{item.quantity}</span>
          <button className="quantity-btn" onClick={increaseQuantity}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

const CartSummary = ({ cartItems }) => {
  const formatCurrency = (value) => {
    return "Rp " + value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  };

  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <section className="cart-summary">
      <h2>Ringkasan Belanja</h2>
      <p>Total Item: <span id="totalItems">{getTotalQuantity()}</span></p>
      <p>Total Harga: Rp<span id="totalPrice">{formatCurrency(getTotalPrice())}</span></p>
      <Link to="../Cek/cek">
      <button>
        <img src="/whatsapp.png" alt="whatsapp-icon" />
        Beli via Whatsapp
      </button>
      </Link>
    </section>
  );
};

const Keranjang = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Bata Tempel Mozaik', price: 14000, quantity: 1, image: '/BataTempelMozaik.png' },
    // ... tambahkan item lain jika diperlukan
  ]);

  const decreaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const increaseQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item))
    );
  };

  return (
    <AppWrapper>
      <Header />
      <main>
        <section className="cart-items">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              decreaseQuantity={() => decreaseQuantity(item.id)}
              increaseQuantity={() => increaseQuantity(item.id)}
            />
          ))}
        </section>
        <CartSummary cartItems={cartItems} />
      </main>
    </AppWrapper>
  );
};

export default Keranjang;
