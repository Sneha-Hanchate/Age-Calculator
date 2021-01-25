import { createStore, combineReducers, applyMiddleware } from "redux";

import userReducer from "../Reducers/reducer";
import reduxLogger from "redux-logger";

const combinedReducer = combineReducers({ userReducer });

const store = createStore(combinedReducer, applyMiddleware(reduxLogger));

export default store;
// npm i --save-dev @types/redux-logger
