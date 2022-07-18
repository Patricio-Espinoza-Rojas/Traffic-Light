import React, { useState } from "react";
//include images into your bundle
import Light from "./Light";

//create your first component
function Home() {
  const colors = ["red", "yellow", "green"];
  const [lit, setLit] = useState("red");
  return (
    <div className="container">
      <div className="home">
        {colors.map((color) => {
          return <Light color={color} lit={lit} setLit={setLit} />;
        })}
      </div>
    </div>
  );
}

export default Home;
