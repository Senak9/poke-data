import React from "react";
import Header from "../../component/header";
import "./style.css";
import { useEffect, useState } from "react";
import api from "../../api/api";
import PokemonCard from "../../component/pokemonCard";

export default function Pokedex() {
  const [pokemonsList, setPokemonsList] = useState([]);
  // const pokemonList = [];

  const getPokemonUrl = async (id) => {
    const response = await api.get(`/pokemon/${id}`);
    // console.log(response.data);
    return response.data;
  };

  const listPokemon = async () => {
    const list = [];
    for (let i = 1; i <= 151; i++) {
      const pokemon = await getPokemonUrl(i);
      // setPokemonsList([...pokemonsList, pokemon]);
      // pokemonList.push(pokemon);
      list.push(pokemon);
    }

    setPokemonsList(list);
  };

  listPokemon();
  console.log(pokemonsList);

  return (
    <div className="containerPokedex">
      <Header />
      <div className="boxPokedex">
        <h1>Pokedex Kanto</h1>
        <div className="bodyPokedex">
          {pokemonsList &&
            pokemonsList.map((pokemon) => {
              return (
                <PokemonCard
                  id={pokemon.id}
                  name={pokemon.name}
                  types={pokemon.types}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
