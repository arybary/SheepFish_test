import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useActions } from '../../store/useActions';
import Footer from './Footer';
import Header from './Header';
import { Main, Root } from './Layout.styled';

const Layout: React.FC = () => {
  const { fetchProducts } = useActions();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    <Root>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Root>
  );
};

export default Layout;
