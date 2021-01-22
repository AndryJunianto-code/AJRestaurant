import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import Hero from "../components/Hero";
import { FaCheck } from "react-icons/fa";

export default function SingleFoodInfo(props) {
  const { getFoodLink } = useGlobalContext();
  const [storeLink] = useState(props.match.params.food);
  const food = getFoodLink(storeLink);

  if (!food) {
    return (
      <aside className="error">
        <h3 className="error-text">no such food can be found</h3>
        <Link className="btn-primary" to="/menu">
          Back to menu
        </Link>
      </aside>
    );
  }
  const {
    images,
    name,
    description,
    calories,
    carbs,
    protein,
    fats,
    sugar,
    salt,
    milkAllergy,
    eggAllergy,
    glutenAllergy,
    price,
    ingredients,
    halal,
    vegetarian,
  } = food;
  return (
    <Hero hero="single-hero">
      <main className="single-food">
        <div className="single-food-top">
          <div className="single-img-container">
            <img src={images[0]} alt={name} />
            <p className="single-price">{price}RM</p>
          </div>

          <div className="single-info">
            <h2 className="name">{name}</h2>
            <h4>{description}</h4>
          </div>

          <div className="single-ingredient">
            <h3 className="single-title">ingredients</h3>
            {ingredients.map((ingredient) => (
              <h3>{ingredient}</h3>
            ))}
          </div>
        </div>

        <div className="single-content">
          <div className="single-nutrition">
            <h3 className="single-title">Nutrition</h3>
            <h5>Calories : {calories}</h5>
            <h5>Carbs : {carbs}g</h5>
            <h5>Protein : {protein}g</h5>
            <h5>Fats : {fats}g</h5>
            <p>Sugar : {sugar}g</p>
            <p>Salt : {salt}g</p>
          </div>

          <div className="single-allergy">
            <h3 className="single-title">Food Allergen</h3>
            {milkAllergy && <p>Milk</p>}
            {glutenAllergy && <p>Gluten</p>}
            {eggAllergy && <p>Egg</p>}
          </div>

          <div className="single-rule">
            {vegetarian && (
              <p>
                Vegetarian
                <FaCheck />
              </p>
            )}
            {halal && (
              <p>
                Halal
                <FaCheck />
              </p>
            )}
          </div>
        </div>
      </main>
    </Hero>
  );
}
