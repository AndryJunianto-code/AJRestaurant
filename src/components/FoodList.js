import React from "react";
import Food from "./Food";

export default function FoodList({ foods }) {
  if (foods.length === 0) {
    return (
      <div className="empty-search">
        <h3>Unfortunately no foods matched your search parameters</h3>
      </div>
    );
  }

  return (
    <section className="foodlist">
      <div className="foodlist-container">
        {foods.map((food) => (
          <Food key={food.id} food={food} className="foodlist-menu" />
        ))}
      </div>
    </section>
  );
}
