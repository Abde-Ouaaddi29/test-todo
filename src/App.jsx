import { useState } from "react";
import "./App.css";
import Home from "./layoute/home";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Home />
      </Provider>
    </>
  );
}

export default App;
