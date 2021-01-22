import React from "react";
import { useGlobalContext } from "../context";
import FoodList from "./FoodList";
import FoodFilter from "./FoodFilter";

export default function FoodContainer() {
  const { loading, foods, sortedFoods } = useGlobalContext();
  if (loading) {
    return <h2>LOADING....</h2>;
  }
  return (
    <section>
      <FoodFilter foods={foods} />
      <FoodList foods={sortedFoods} />
    </section>
  );
}
