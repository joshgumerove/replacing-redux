import React from "react";
import ReactDOM from "react-dom";
// import { Provider } from 'react-redux';
// import { combineReducers, createStore } from 'redux';
import { BrowserRouter } from "react-router-dom";
// import ProductsProvider from "./context/products-context";

import "./index.css";
import App from "./App";
import configureStore from "./hooks-store/products-store";

configureStore();
// import productReducer from "./store/reducers/products";

// const rootReducer = combineReducers({
//   shop: productReducer,
// });

// const store = createStore(rootReducer);

ReactDOM.render(
  // <ProductsProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
