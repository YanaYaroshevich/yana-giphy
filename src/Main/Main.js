import React, { Component } from "react";
import { Route } from "react-router-dom";

import Header from "../components/Header/Header";
import Home from "../scenes/Home/Home";

export class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route exact path="/" component={Home} />
      </div>
    );
  }
}
