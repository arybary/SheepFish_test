import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import NoMatchPage from "./page/NoMatchPage";
import ProductPage from "./page/ProductPage";
import ProductsHomePage from "./page/ProductsHomePage";
import store from "./store/store";

const App: React.FC = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<ProductsHomePage />} />
          <Route index path="/:id" element={<ProductPage />} />
          <Route  path="/*" element={<NoMatchPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
