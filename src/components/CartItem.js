import React from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export default function CartItem({ cart, increment, decrement }) {
  const { name, price, images, total, quantity, id } = cart;

  return (
    <section className="cart-item">
      <div className="cart-name">
        <img src={images[0]} alt={name} />
        <h4>{name}</h4>
      </div>

      <div className="cart-price">
        <h4>RM {price}</h4>
      </div>

      <div className="cart-quantity">
        <FaChevronLeft className="cart-icon" onClick={() => decrement(id)} />
        <h4>{quantity}</h4>
        <FaChevronRight className="cart-icon" onClick={() => increment(id)} />
      </div>

      <div className="cart-total">
        <h4>RM {total}</h4>
      </div>
    </section>
  );
}
