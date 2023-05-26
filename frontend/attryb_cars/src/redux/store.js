import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as carReducer } from "./cars/reducer";
import { reducer as authReducer  } from "./auth/reducer"

const rootReducer = combineReducers({carReducer,authReducer})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))

// const url = `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}`;
