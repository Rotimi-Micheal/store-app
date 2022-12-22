import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./store/AuthContxt";
import CartProvider from "./store/CartProvider";
import { Provider } from "react-redux";
import store from "./reduxStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <AuthContextProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </AuthContextProvider>
  </CartProvider>
);
