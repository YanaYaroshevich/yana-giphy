import { routerMiddleware, routerReducer } from "react-router-redux";
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { createEpicMiddleware, combineEpics } from "redux-observable";

import { reducer as homeReducer } from "../../scenes/Home/services/reducer";
import homeEpic from "../../scenes/Home/services/epics";

import { reducer as randomReducer } from "../../scenes/Random/services/reducer";
import randomEpic from "../../scenes/Random/services/epics";

import api from "../api/api";

export default history => {
  const routerHistoryMiddleware = routerMiddleware(history);

  const rootEpic = combineEpics(homeEpic, randomEpic);

  const epicMiddleware = createEpicMiddleware({
    dependencies: {
      api
    }
  });

  const reducers = combineReducers({
    router: routerReducer,
    home: homeReducer,
    random: randomReducer
  });

  const store = createStore(
    reducers,
    compose(applyMiddleware(routerHistoryMiddleware, epicMiddleware))
  );

  epicMiddleware.run(rootEpic);

  // create store (takes reducing function, the initial state, enhancer(middleware and other))
  return store;
};
