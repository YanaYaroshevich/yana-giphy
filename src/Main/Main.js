import React, { Component } from "react";
import { Route } from "react-router-dom";

import Header from "../components/Header/Header";
import Home from "../scenes/Home/Home";
import Random from "../scenes/Random/Random";

export class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path={"/random"} component={Random} />
      </div>
    );
  }
}
