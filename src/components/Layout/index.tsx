import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import { Main, Root } from './Layout.styled';

const Layout: React.FC = () => (
  <Root>
    <Header />
    <Main>
      <Outlet />
    </Main>
    <Footer />
  </Root>
);

export default Layout;
