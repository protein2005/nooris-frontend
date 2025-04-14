import React from 'react';
import MENY from '../../images/menybg.jpg';

function ContactSection() {
  return (
    <section class="hero__kontakt" style={{ backgroundImage: `url(${MENY})` }}>
      <div class="hero__overlay">
        <h1 class="kontakt__title">Kontakt</h1>
      </div>
    </section>
  );
}

export default ContactSection;
