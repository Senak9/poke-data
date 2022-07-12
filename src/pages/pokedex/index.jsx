import React from "react";
import Header from "../../component/header";
import "./style.css";

export default function Pokedex() {
  return (
    <div className="containerPokedex">
      <Header />
      <div className="boxPokedex"></div>
    </div>
  );
}
