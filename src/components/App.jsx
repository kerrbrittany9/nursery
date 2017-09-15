import React from "react";
import Catalog from "./Catalog";


function App(){

  var containerStyles = {
    margin: '20'
  }
  return (
    <div style={containerStyles}>
      <h3>Pistils Nursery</h3>
      <p><em>Oregon's Specialty Plant Shop and Mercantile</em></p>
      <Catalog/>
    </div>
  );
}

export default App;
