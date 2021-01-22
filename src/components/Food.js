import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

export default function Food({ food }) {
  const { name, images, price, link, id } = food;
  const [inCart, setInCart] = useState(false);
  const { addOrder } = useGlobalContext();

  return (
    <section className="food">
      <div className="food-control">
        <h3>{name}</h3>
        <div className="img-container">
          <img src={images[0]} alt="Food" />
          <h5 className="price">RM {price}</h5>
          <Link to={`/menu/${link}`} className="details-link">
            Details
          </Link>
          <button
            className="plus-btn"
            onClick={() => {
              addOrder(id);
              setInCart(true);
            }}
          >
            {inCart ? (
              <Link to="/cart">
                <span>In Cart</span>
              </Link>
            ) : (
              <FaPlus className="plus-icon" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
