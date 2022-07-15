// Vanilla Redux
/* import { createStore, combineReducers } from "redux";
import cat from "./cat";

const rootReducer = combineReducers({ cat });

const store = createStore(rootReducer);

export default store; */

// Redux Tool Kit
import { configureStore } from "@reduxjs/toolkit";
import catReducer from "./catSlice";

// {여긴 slice를 넣으면 된다.}
// cat이름으로 catReducer라는 이름을 가진 slice를 가지고 온다.
const store = configureStore({ reducer: { cat: catReducer } });

export default store;
