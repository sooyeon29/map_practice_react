import { createStore, applyMiddleware, compose } from "redux";
import { combineReducers } from "redux";

// 내가 만든 리듀서를 import해준다
import myChanger from "../modules/changer";

// 내가 만든 리듀서를 넣어준다
const rootReducer = combineReducers({
  myChanger: myChanger,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware()));

export default store;
