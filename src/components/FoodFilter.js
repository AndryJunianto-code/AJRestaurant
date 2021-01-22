import React from "react";
import { useGlobalContext } from "../context";
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};
export default function FoodFilter({ foods }) {
  const {
    type,
    handleChange,
    maxPrice,
    price,
    minPrice,
    minCalories,
    maxCalories,
    calories,
    vegetarian,
    halal,
    searchName,
  } = useGlobalContext();

  let typesOption = getUnique(foods, "type");
  typesOption = ["all", ...typesOption];
  typesOption = typesOption.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter">
      <form className="filter-form">
        {/* SEARCH */}
        <div className="form-group filter-name">
          <input
            name="search-name"
            type="text"
            placeholder="Search..."
            className="filter-name-input form-control"
            onChange={handleChange}
            value={searchName}
          />
        </div>
        {/* SEARCH */}
        {/* TYPES */}
        <div className="form-group filter-types">
          <label htmlFor="type">Type</label>
          <select
            name="type"
            id="id"
            value={type}
            onChange={handleChange}
            className="form-control"
          >
            {typesOption}
          </select>
        </div>
        {/* END TYPES */}
        {/* PRICE */}
        <div className="form-group filter-price">
          <label htmlFor="price">Price {price}RM</label>
          <input
            name="price"
            id="price"
            type="range"
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={handleChange}
            className="form-control"
          ></input>
        </div>
        {/* END PRICE */}
        {/* CALORIES */}
        <div className="form-group filter-calories">
          <label htmlFor="calories">Calories {calories}</label>
          <input
            type="range"
            id="calories"
            name="calories"
            min={minCalories}
            max={maxCalories}
            value={calories}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* END CALORIES */}
        {/* CHECKBOXES */}
        <div className="filter-checkboxes">
          {/* VEGETARIAN */}
          <div className="checkbox filter-vegetarian">
            <input
              type="checkbox"
              className="form-control"
              id="vegetarian"
              name="vegetarian"
              onChange={handleChange}
              checked={vegetarian}
            />
            <label htmlFor="vegetarian">Vegetarian</label>
          </div>
          {/* HALAL */}
          <div className="checkbox filter-halal">
            <input
              type="checkbox"
              className="form-control"
              id="halal"
              name="halal"
              onChange={handleChange}
              checked={halal}
            />
            <label htmlFor="halal">Halal</label>
          </div>
        </div>
      </form>
    </section>
  );
}
