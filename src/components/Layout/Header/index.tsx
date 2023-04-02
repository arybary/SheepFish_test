import * as React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import HomeIcon from "@mui/icons-material/Home";
import { BottomNavigationAction, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import ProductAdd from "../../ProductAdd";
import { HeaderContainer, StyledAppBar, StyledToolbar } from "./Header.styled";

const navLinks = [
  {
    title: "All products",
    path: "/",
    icon: <HomeIcon />,
  },
];

const Header:React.FC = () => {
  const location = useLocation();
  const avatar = "https://avatars.githubusercontent.com/u/53406649?v=4";
  return (
    <HeaderContainer>
      <StyledAppBar>
        <StyledToolbar>     
          <Typography variant="subtitle1" component="span">
          <Avatar alt="User Avatar" variant="rounded" src={avatar} />
            Rostislav
          </Typography>
          <Typography variant="h6" component="div">
            PRODUCTS
          </Typography>
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
          <ProductAdd />
        </StyledToolbar>
      </StyledAppBar>
      <Toolbar />
    </HeaderContainer>
  );
};

export default Header;