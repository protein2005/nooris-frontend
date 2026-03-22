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
          content="Här hittar du kontaktuppgifter, öppettider och vägbeskrivning till Nooris kök & bar i Luleå. Hör av dig vid frågor eller bokningsärenden."
        />
        <meta
          name="keywords"
          content="kontakt, restaurang, support, bokning, frågor, telefon, e-post, öppettider, adress"
        />
        <link rel="canonical" href="https://nooris.nu/kontakt" />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Kontakt - Nooris kök & bar",
            "url": "https://nooris.nu/kontakt",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Storgatan 46F",
              "addressLocality": "Luleå",
              "postalCode": "972 31",
              "addressCountry": "SE"
            },
            "telephone": "+46 920 27 04 44",
            "contactType": "customer service"
          }
          `}
        </script>
      </Helmet>
      <ContactSection />
      <SupportSection />
    </>
  );
}

export default Contact;
