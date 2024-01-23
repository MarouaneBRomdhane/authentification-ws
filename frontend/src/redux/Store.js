import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import { User_Reducer } from "./Reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    User_Reducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);
export default store;
