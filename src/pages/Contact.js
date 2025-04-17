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
          content="Kontakta oss för bokningar eller frågor. Vi finns här för att hjälpa dig!"
        />
        <meta name="keywords" content="kontakt, restaurang, adress, telefon, e-post" />
        <meta name="language" content="sv" />
      </Helmet>
      <ContactSection />
      <SupportSection />
    </>
  );
}

export default Contact;
