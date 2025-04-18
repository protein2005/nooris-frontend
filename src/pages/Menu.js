import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroMenuSection from '../components/HeroMenuSection';
import MenuList from '../components/MenuList';

function Menu() {
  return (
    <>
      <Helmet>
        <title>Meny | Nooris kök & bar</title>
        <meta
          name="description"
          content="Upptäck vår läckra meny med rätter för alla smaker, från förrätter till desserter och alkoholhaltiga drycker."
        />
        <meta
          name="keywords"
          content="meny, restaurang, mat, förrätter, huvudrätter, desserter, pizza, kebab, pasta, alkohol, sallad, barnmeny"
        />
        <link rel="canonical" href="https://nooris.nu/meny" />
      </Helmet>
      <HeroMenuSection />
      <MenuList />
    </>
  );
}

export default Menu;
