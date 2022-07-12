import React from "react";
import Header from "../../component/header";
import "./style.css";

export default function Home() {
  return (
    <div className="containerHome">
      <Header />
      <div className="boxHome">
        <p>Home</p>
      </div>
    </div>
  );
}
