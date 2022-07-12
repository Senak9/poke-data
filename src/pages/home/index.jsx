import React from "react";
import Header from "../../component/header";
import CardType from "../../component/cardType";
import "./style.css";
import PokemonHome from "../../assets/pokemonHome.svg";

export default function Home() {
  return (
    <div className="containerHome">
      <Header />
      <div className="boxHome">
        <div className="boxCard">
          <CardType /> <CardType />
        </div>
        <div className="boxCard">
          <CardType /> <CardType />
        </div>
        <div>
          <img src={PokemonHome} alt="PokemonHome" className="pokemonHome" />
        </div>
      </div>
    </div>
  );
}
