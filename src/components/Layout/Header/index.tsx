import * as React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import HomeIcon from "@mui/icons-material/Home";
import { BottomNavigationAction } from "@mui/material";

const navLinks = [
  {
    title: "All products",
    path: "/",
    icon: <HomeIcon />,
  },

];

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "green" }}>
      <Toolbar>
        <div style={{ flexGrow: 1 }} />
         {navLinks.map(
          (link) =>
            location.pathname !== link.path && (
              <BottomNavigationAction
                key={link.title}
                label={link.title}
                component={RouterLink}
                to={link.path}
                icon={link.icon}
              />
            )
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
