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
        <title>Nooris kök & bar Luleå</title>
        <meta
          name="description"
          content="Välkommen till vår restaurang! Njut av utsökt mat och trevlig atmosfär."
        />
        <meta name="keywords" content="restaurang, mat, meny, bokning, hem" />
        <meta name="language" content="sv" />
      </Helmet>
      <HeroSection />
      <AboutUsSection />
      <BookingSection />
      <MenuSection />
    </>
  );
}

export default Home;
