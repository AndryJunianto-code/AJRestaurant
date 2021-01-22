import React from "react";
import Title from "../components/Title";
import Hero from "../components/Hero";
import FoodContainer from "../components/FoodContainer";

export default function Menu() {
  return (
    <>
      <section className="menu-heading">
        <Hero hero="menu-hero"></Hero>
        <form className="menu-form">
          <label htmlFor="address">Address for delivery</label>
          <input type="text" name="address" />
          <button>Submit</button>
        </form>
      </section>
      <Title title="Top Menu" className="menu-title" />
      <Hero hero="menu-list">
        <FoodContainer />
      </Hero>
    </>
  );
}
