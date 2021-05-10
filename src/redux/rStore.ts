import { combineReducers, createStore } from "redux";
import { addWord } from "./word-reducer";

let redusers = combineReducers({
  DefaultState: addWord,
});

let Store = createStore(redusers);

export default Store;
