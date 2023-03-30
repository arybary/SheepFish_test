import { CssBaseline, Container } from "@mui/material";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useActions } from "../../store/useActions";
import Footer from "./Footer";
import Header from "./Header";

const Layout: React.FC = () => {
  const { fetchProducts } = useActions();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Container sx={{ marginTop: 10, marginBottom: 10 }}>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};

export default Layout;
