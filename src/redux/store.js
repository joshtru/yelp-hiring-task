import { createStore, applyMiddleware } from "redux";
import createSaga from "redux-saga";

import { logger } from "redux-logger";

import rootReducer from "./root-reducer";
import rootSagas from "./root.saga";

const sagaMiddle = createSaga();
const middlewares = [sagaMiddle];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddle.run(rootSagas);

export default store;
