import React from 'react';
import MENY from '../../images/menybg.jpg';

function ContactSection() {
  return (
    <section className="hero__kontakt" style={{ backgroundImage: `url(${MENY})` }}>
      <div className="hero__overlay">
        <h1 className="kontakt__title">Kontakt</h1>
      </div>
    </section>
  );
}

export default ContactSection;
