import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroMenuSection from '../components/HeroMenuSection';
import MenuList from '../components/MenuList';

function Menu() {
  return (
    <>
      <Helmet>
        <title>Meny | Nooris kök & bar</title>
        <meta name="description" content="Upptäck vår läckra meny med rätter för alla smaker." />
        <meta name="keywords" content="meny, mat, restaurang, rätter" />
        <meta name="language" content="sv" />
      </Helmet>
      <HeroMenuSection />
      <MenuList />
    </>
  );
}

export default Menu;
