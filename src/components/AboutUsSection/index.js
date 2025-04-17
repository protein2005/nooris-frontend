import React from 'react';

import information1 from '../../images/information1.png';
import information2 from '../../images/information2.png';

function AboutUsSection() {
  return (
    <section class="about-us shadow">
      <div class="about-us__wrapper container">
        <div class="about-us__images">
          <img
            src={information1}
            alt="Panelen Steakhouse Luleå interiör"
            class="about-us__image about-us__image--1"
            width="323"
            height="215"
            loading="lazy"
          />
          <img
            src={information2}
            alt="Panelen Steakhouse Luleå mat"
            class="about-us__image about-us__image--2"
            width="323"
            height="215"
            loading="lazy"
          />
        </div>
        <div class="about-us__content">
          <h2 class="about-us__title">Om oss.</h2>
          <p class="about-us__subtitle">Information</p>
          <div class="about-us__description">
            <p class="fw-600">
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
