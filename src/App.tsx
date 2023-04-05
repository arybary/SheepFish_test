import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import NoProductPage from "./page/NoProductPage";
import ProductPage from "./page/ProductPage";
import ProductsHomePage from "./page/ProductsHomePage";
import store from "./store/store";
import { GlobalStyle } from "./theme.";

const App: React.FC = () => (
  <Provider store={store}>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProductsHomePage />} />
          <Route path=":id" element={<ProductPage />} />
          <Route path={"/no-product"} element={<NoProductPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
