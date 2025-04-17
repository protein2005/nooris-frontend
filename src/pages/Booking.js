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
      </Helmet>
      <HeroBookingSection />
      <BokaBord />
    </>
  );
}

export default Booking;
