import React from "react";
import Title from "../components/Title";
import Hero from "../components/Hero";

export default function About() {
  return (
    <Hero hero="about-hero">
      <div className="about-content">
        <Title title="About"></Title>
        <h3>This is my first solo project. Hope you enjoy the restaurant!</h3>
      </div>
    </Hero>
  );
}
