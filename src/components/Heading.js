import React from "react";
import Hero from "./Hero";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

export default function Heading() {
  return (
    <Hero hero="heading-hero">
      <div className="heading-content">
        <h1>High class low cost</h1>
        <h4>
          Fresh and premium ingredients <span>are waiting for you</span>
        </h4>
        <div className="heading-link">
          <Link to="./menu">Order Now</Link>
        </div>
      </div>
    </Hero>
  );
}
