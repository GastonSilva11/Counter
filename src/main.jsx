import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

function counterReducer(state = 0, action) {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return state + 1;

    case "DECREMENT_COUNTER":
      return state - 1;

    case "REMOVE_TASK":

    default:
      return state;
  }
}

const store = configureStore({
  reducer: { counter: counterReducer },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
