import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import GifItemList from "./components/GifItemList/GifItemList";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <GifItemList />
      </div>
    );
  }
}

export default App;
