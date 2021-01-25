import { createStore, combineReducers, applyMiddleware } from "redux";

import userReducer from "../Reducers/reducer";
import reduxLogger from "redux-logger";
import thunk from "redux-thunk";

const combinedReducer = combineReducers({ userReducer });

const store = createStore(combinedReducer, applyMiddleware(reduxLogger, thunk));

export default store;
// npm i --save-dev @types/redux-logger
