import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Image from "./Image"

class App extends Component {
  render() {
    return (
      <div className="App">
       <Image Meme={"https://i.chzbgr.com/full/9237949696/hC250E852/"}/>
      </div>
    );
  }
}

export default App;
