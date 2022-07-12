import React from "react";
import "./style.css";
export default function Header() {
  return (
    <div className="containerHeader">
      <h1>Pokemon</h1>
      <div className="boxHeader">
        <h2>Home</h2>
        <h2>Pokédex</h2>
        <h2>Moves</h2>
        <h2>Evolution</h2>
        <h2>Locations</h2>
        <h2>Outros</h2>

        {/* <img src={HeaderIcon} alt="HeaderIcon" className="SeaderIcon" /> */}
      </div>
    </div>
  );
}
