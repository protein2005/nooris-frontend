import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroBookingSection from '../components/HeroBookingSection';
import BokaBord from '../components/BokaBord';

function Booking() {
  return (
    <>
      <Helmet>
        <title>Boka Bord | Nooris kök & bar</title>
        <meta
          name="description"
          content="Boka bord online enkelt och snabbt på Nooris kök & bar. Välj antal gäster, datum och tid för din bokning, fyll i dina kontaktuppgifter och få en bekräftelse på din reservation."
        />
        <meta
          name="keywords"
          content="boka bord, restaurangbokning, online bokning, boka bord Nooris kök & bar, bokning, boka bord snabbt, restaurang, bordreservationssystem, boka bord online, tillgängliga tider"
        />
        <link rel="canonical" href="https://nooris.nu/bokabord" />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Reservation",
            "name": "Boka bord - Nooris kök & bar",
            "url": "https://nooris.nu/bokabord",
            "reservationFor": {
              "@type": "Restaurant",
              "name": "Nooris kök & bar"
            },
            "reservationStatus": "https://schema.org/ReservationConfirmed",
          }
          `}
        </script>
      </Helmet>
      <HeroBookingSection />
      <BokaBord />
    </>
  );
}

export default Booking;
