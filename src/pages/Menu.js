import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroMenuSection from '../components/HeroMenuSection';

function Menu() {
  return (
    <>
      <Helmet>
        <title>Meny | Nooris kök & bar</title>
        <meta name="description" content="Upptäck vår läckra meny med rätter för alla smaker." />
        <meta name="keywords" content="meny, mat, restaurang, rätter" />
        <meta name="language" content="sv" />

        <meta property="og:title" content="Meny | Nooris kök & bar" />
        <meta property="og:description" content="Utforska våra utsökta rätter och specialiteter." />
        <meta property="og:image" content="/preview.jpg" />
        <meta property="og:url" content="https://dinwebbplats.se/menu" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Meny | Nooris kök & bar" />
        <meta
          name="twitter:description"
          content="Utforska våra utsökta rätter och specialiteter."
        />
        <meta name="twitter:image" content="/preview.jpg" />
      </Helmet>
      <HeroMenuSection />
    </>
  );
}

export default Menu;
