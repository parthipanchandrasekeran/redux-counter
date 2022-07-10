import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import allReducer from "./reducers";
import { Provider } from "react-redux";

const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

/*//STORE -- GLOBALISED STATE

//ACTION -- INCREMENT - FUNC WHICH RETURNS AN OBJECT

const increment = () => {
  return { type: "INCREMENT" };
};

const decrement = () => {
  return { type: "DECREMENT" };
};

//REDUCER -- ACTIONS TRANSFORM THE STATE INTO NEW STATE, STATE CAN BE STORED AS AN OBJECT AND SENT

const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
};

let store = createStore(counter);

//display in console

store.subscribe(() => {
  console.log(store.getState());
});
//DISPATCH -- ACTION TO THE REDUCER

store.dispatch(increment());
store.dispatch(decrement());*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
