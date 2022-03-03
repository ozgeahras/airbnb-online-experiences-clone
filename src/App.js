import React from "react";
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero.js";
import Card from "./components/Card.js";
import "./App.css";
import data from "./data.js";

export default function App() {
  let card = data.map((elem) => {
    return <Card key={elem.id} {...elem} />;
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{card}</section>
    </div>
  );
}
