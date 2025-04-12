import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroBookingSection from '../components/HeroBookingSection';
import BokaBord from '../components/BokaBord';

function Booking() {
  return (
    <>
      <Helmet>
        <title>Boka Bord | Nooris kök & bar</title>
        <meta name="description" content="Boka bord online enkelt och snabbt på vår restaurang." />
        <meta name="keywords" content="bokning, boka bord, restaurang, onlinebokning" />
        <meta name="language" content="sv" />

        <meta property="og:title" content="Boka Bord | Nooris kök & bar" />
        <meta
          property="og:description"
          content="Boka bord online enkelt och snabbt på vår restaurang."
        />
        <meta property="og:image" content="/preview.jpg" />
        <meta property="og:url" content="https://dinwebbplats.se/booking" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Boka Bord | Nooris kök & bar" />
        <meta
          name="twitter:description"
          content="Boka bord online enkelt och snabbt på vår restaurang."
        />
        <meta name="twitter:image" content="/preview.jpg" />
      </Helmet>
      <HeroBookingSection />
      <BokaBord />
    </>
  );
}

export default Booking;
