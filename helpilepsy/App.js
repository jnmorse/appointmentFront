import React from "react";
import { Provider } from "react-redux";
import Navigation from "./Navigation/index";
import store from "./js/store";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
