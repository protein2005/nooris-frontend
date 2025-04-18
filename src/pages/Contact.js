import React from 'react';
import { Helmet } from 'react-helmet-async';
import ContactSection from '../components/ContactSection';
import SupportSection from '../components/SupportSection';

function Contact() {
  return (
    <>
      <Helmet>
        <title>Kontakt | Nooris kök & bar</title>
        <meta
          name="description"
          content="Kontakta oss för bokningar, frågor eller support. Vi hjälper dig gärna! Hitta våra kontaktuppgifter och öppettider här."
        />
        <meta
          name="keywords"
          content="kontakt, restaurang, support, bokning, frågor, telefon, e-post, öppettider, adress"
        />
        <link rel="canonical" href="https://nooris.nu/kontakt" />
      </Helmet>
      <ContactSection />
      <SupportSection />
    </>
  );
}

export default Contact;
