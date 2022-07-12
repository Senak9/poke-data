import React from "react";
import "./style.css";

export default function CardType({ status }) {
  console.log(status);
  return (
    <div
      className={
        status === "pokedex"
          ? "pokedexBox containerCardType"
          : status === "moves"
          ? "movesBox containerCardType"
          : status === "evolution"
          ? "evolutionBox containerCardType"
          : "locationsBox containerCardType"
      }
    >
      <h1>
        {status === "pokedex"
          ? "Pokedex"
          : status === "moves"
          ? "Moves"
          : status === "evolution"
          ? "Evolution"
          : "Locations"}
      </h1>
    </div>
  );
}
