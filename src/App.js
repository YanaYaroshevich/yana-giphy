import React, { Component } from "react";
import createStore from "./services/store/createStore";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import createHistory from "history/createBrowserHistory";

import { Main } from "./Main/Main";

import "./App.css";

const history = createHistory();
const store = createStore(history);

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <Main />
          </ConnectedRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
