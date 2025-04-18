import React from 'react';

import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="main">
        <h1 className="visually-hidden">Nooris Kök & Bar - Luleå</h1>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
