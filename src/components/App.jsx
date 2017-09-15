import React from "react";
import Catalog from "./Catalog";


function App(){

  var containerStyles = {
    margin: '20'
  }
  var imageStyles = {
    margin:'20'
  }

  return (
    <div style={containerStyles}>
      <h1>Pistils Nursery</h1>
      <p><em>Oregon's Specialty Plant Shop and Mercantile</em></p>
      <img style={imageStyles} src="http://pistilsnursery.com/wp-content/uploads/2014/01/mercantile-300x240.jpg"/>
      <img style={imageStyles} src="http://pistilsnursery.com/wp-content/uploads/2014/01/webshoptile.jpg"/>
      <img style={imageStyles} src="http://pistilsnursery.com/wp-content/uploads/2014/01/visiontile.jpg"/>
      <hr/>
      <Catalog/>
    </div>
  );
}

export default App;
