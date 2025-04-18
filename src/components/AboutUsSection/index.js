import React from 'react';

import information1 from '../../images/information1.png';
import information2 from '../../images/information2.png';

function AboutUsSection() {
  return (
    <section className="about-us shadow">
      <div className="about-us__wrapper container">
        <div className="about-us__images">
          <img
            src={information1}
            alt="Nooris Luleå interiör"
            className="about-us__image about-us__image--1"
            width="323"
            height="215"
            loading="lazy"
          />
          <img
            src={information2}
            alt="Nooris Luleå mat"
            className="about-us__image about-us__image--2"
            width="323"
            height="215"
            loading="lazy"
          />
        </div>
        <div className="about-us__content">
          <h2 className="about-us__title">Om oss.</h2>
          <p className="about-us__subtitle">Information</p>
          <div className="about-us__description">
            <p className="fw-600">
              Välkommen till Nooris kök & bar Luleå, en fantastisk restaurang med steakhouse-koncept
              och en grym cocktailbar. Restaurangen är belägen på Storgatan 46F, 972 31 Luleå
            </p>
            <p>
              Nooris är ett självklart val för dig som sätter högt värde på noga utvalda råvaror,
              god mat och dryck med kött i fokus.
            </p>
            <p>
              Precis som i köket kommer vi ha grymma bartenders som har koll på hur man blandar
              lyxiga cocktails – alltså en kombination som är svårslagen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;
