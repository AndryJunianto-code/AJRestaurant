import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
import CartItem from "./CartItem";
import Title from "./Title";
import { Link } from "react-router-dom";

export default function Cart() {
  const {
    cart,
    clearCart,
    increment,
    decrement,
    cartTotalPrice,
    cartSubtotal,
    cartTax,
    totalItem,
  } = useGlobalContext();

  if (cart.length === 0) {
    return (
      <>
        <h2 className="error">Your Cart Is Empty Now</h2>
        <Link to="/menu">
          <button>Start Ordering Now</button>
        </Link>
      </>
    );
  }
  return (
    <section className="cart">
      <Link to="/menu" className="cart-link">
        Back to menu
      </Link>
      <Title title="cart summary" className="cart-title" />
      <div className="cart-header">
        <h3>Item</h3>
        <h3>Price</h3>
        <h3>Quantity</h3>
        <h3 className="cart-header-total">Total</h3>
      </div>
      <div className="cart-content">
        {cart.map((cart) => (
          <CartItem
            key={cart.id}
            cart={cart}
            increment={increment}
            decrement={decrement}
          />
        ))}
      </div>
      <div className="cart-footer">
        <button onClick={clearCart} className="clear-cart">
          Clear Cart
        </button>
        <main className="cart-footer-pricing">
          <div className="subtotal">
            <h4>Subtotal</h4>
            <p>RM {cartSubtotal}</p>
          </div>
          <div className="total-items">
            <h4>Total Items</h4>
            <p>{totalItem}</p>
          </div>
          <div className="tax">
            <h4>Tax</h4>
            <p>RM {cartTax}</p>
          </div>
          <div className="total-price">
            <h3>Total Price</h3>
            <p>RM {cartTotalPrice}</p>
          </div>
          <button>Confirm Order </button>
        </main>
      </div>
    </section>
  );
}
