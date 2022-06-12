import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk"
import { authReducer } from "./auth/auth.reducers";
import { todoReducer } from "./Todo/todo.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  todo: todoReducer
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));