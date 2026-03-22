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
        <title>Nooris kök & bar - Luleå</title>
        <meta
          name="description"
          content="Nooris kök & bar i Luleå bjuder på smakrika rätter, omtänksam service och en avslappnad miljö. Utforska menyn och boka bord enkelt online."
        />
        <meta
          name="keywords"
          content="Nooris, Nooris kök & bar, restaurang Luleå, restaurang i Luleå, mat, meny, lunch, middag, boka bord, bokning, svensk mat, internationell mat, bar, dryck, take away, hemlagad mat, god mat, Luleå centrum, restaurangupplevelse, kvalitetsmat, familjerestaurang, uteservering, mat för alla, vegetariskt, kött, fisk, dessert, öppettider"
        />
        <link rel="canonical" href="https://nooris.nu/" />
      </Helmet>
      <HeroSection />
      <AboutUsSection />
      <BookingSection />
      <MenuSection />
    </>
  );
}

export default Home;
