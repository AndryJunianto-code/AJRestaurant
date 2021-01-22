import React from "react";
import Hero from "./Hero";
import Title from "./Title";
import { useGlobalContext } from "../context";
import Carousel from "react-elastic-carousel";
import Food from "./Food";
import Services from "./Services";
import Heading from "./Heading";

export default function Popular() {
  const { popularFoods } = useGlobalContext();
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 50, itemsToShow: 2 },
    { width: 50, itemsToShow: 3 },
  ];
  return (
    <Hero hero="first-hero">
      <Heading />
      <Title title="Most Popular" className="popular-title" />
      <div className="popular-container">
        <Carousel breakPoints={breakPoints}>
          {popularFoods.map((food) => {
            return <Food key={food.id} food={food} />;
          })}
        </Carousel>
      </div>
      <Services />
    </Hero>
  );
}
