import React from "react";
import { FaMotorcycle, FaGlassMartini, FaBacon } from "react-icons/fa";
import Hero from "./Hero";
import Title from "./Title";

export default function Services() {
  return (
    <section className="services">
      <Title title="services" />
      <div className="service-content">
        <div className="service-delivery">
          <FaMotorcycle className="service-icons" />
          <h3>instant delivery to your place</h3>
        </div>
        <div className="service-drink">
          <FaGlassMartini className="service-icons" />
          <h3>Bottomless drinks for every meals</h3>
        </div>
        <div className="service-sauce">
          <FaBacon className="service-icons" />
          <h3>Unlimited sauce to satisfy your cravings</h3>
        </div>
      </div>
    </section>
  );
}
