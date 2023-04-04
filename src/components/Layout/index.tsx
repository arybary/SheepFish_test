import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
import { Root } from "./Layout.styled";

const Layout: React.FC = () => (
  <Root>
    <Header />
    <Box>
      <Outlet />
    </Box>
    <Footer />
  </Root>
);

export default Layout;
