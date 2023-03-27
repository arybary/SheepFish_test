import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            My Shop
          </Link>
          <Link to="/add" style={{ color: "white", textDecoration: "none" }}>
            new product
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;