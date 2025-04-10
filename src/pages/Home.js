import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/HeroSection';
import AboutUsSection from '../components/AboutUsSection';
import BookingSection from '../components/BookingSection';
import MenuSection from '../components/MenuSection';

function Home() {
  return (
    <>
      <Helmet>
        <title>Hem | Nooris kök & bar</title>
        <meta
          name="description"
          content="Välkommen till vår restaurang! Njut av utsökt mat och trevlig atmosfär."
        />
        <meta name="keywords" content="restaurang, mat, meny, bokning, hem" />
        <meta name="language" content="sv" />
        <meta property="og:title" content="Hem | Nooris kök & bar" />
        <meta
          property="og:description"
          content="Välkommen till vår restaurang! Upptäck våra bästa rätter."
        />
        <meta property="og:image" content="/preview.jpg" />
        <meta property="og:url" content="https://dinwebbplats.se/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hem | Nooris kök & bar" />
        <meta
          name="twitter:description"
          content="Välkommen till vår restaurang! Upptäck våra bästa rätter."
        />
        <meta name="twitter:image" content="/preview.jpg" />
      </Helmet>
      <HeroSection />
      <AboutUsSection />
      <BookingSection />
      <MenuSection />
    </>
  );
}

export default Home;
