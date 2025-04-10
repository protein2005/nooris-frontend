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

        <meta property="og:title" content="Kontakt | Nooris kök & bar" />
        <meta property="og:description" content="Kontakta oss för bokningar eller frågor." />
        <meta property="og:image" content="/preview.jpg" />
        <meta property="og:url" content="https://dinwebbplats.se/contact" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kontakt | Nooris kök & bar" />
        <meta name="twitter:description" content="Kontakta oss för bokningar eller frågor." />
        <meta name="twitter:image" content="/preview.jpg" />
      </Helmet>
      <ContactSection />
      <SupportSection />
    </>
  );
}

export default Contact;
