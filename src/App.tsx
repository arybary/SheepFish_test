import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import ProductsHomePage from "./page/ProductsHomePage";
import store from "./store/store";

const App: React.FC = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<ProductsHomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
