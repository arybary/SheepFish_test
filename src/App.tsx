import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import AddProduct from "./page/AddProduct";
import Home from "./page/Home";



function App() {
  return (

      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddProduct />} />    
      </Route>
    </Routes>
      </BrowserRouter>
 
  );
}

export default App;
