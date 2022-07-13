import React from "react";
import "./style.css";

export default function PokemonCard({ id, name, types }) {
  console.log(`types?`, types);
  return (
    <div className={`card`}>
      <div className={`boxImage ${types[0].type.name}`}>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt={name}
          className="cardImag"
        />
      </div>
      <h1>
        {id} {name}
      </h1>
      <h2>${types.map}</h2>
    </div>
  );
}
