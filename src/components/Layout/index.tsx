import {
  Box,
  Container,
  ThemeProvider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
import { theme, Root } from "./Layout.styled";

const Layout: React.FC = () => {
  const appTheme = useTheme();
  const isMdUp = useMediaQuery(appTheme.breakpoints.up("md"));
  const typography = isMdUp ? { fontSize: 24 } : {};
  return (
    <ThemeProvider theme={theme}>
      <Root>
        <Typography component="div" sx={{ p: 2, ...typography }}>
          <Header />
          <Box>
            <Outlet />
          </Box>
          <Footer />
        </Typography>
      </Root>
    </ThemeProvider>
  );
};

export default Layout;
