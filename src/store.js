import { createStore } from "redux";
import reducer from "./reducer/index";

const store = createStore(
  reducer,
  typeof window === "object" &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION !== "undefined"
    ? window.__REDUX_DEVTOOLS_EXTENSION()
    : (f) => f
);

export default store;
