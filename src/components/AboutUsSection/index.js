import React from 'react';

import information1 from '../../images/information1.jpg';
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
          <h2 className="about-us__title">Om Nooris</h2>
          <p className="about-us__subtitle">Vår atmosfär</p>
          <div className="about-us__description">
            <p className="fw-600">
              På Nooris kök & bar i Luleå möts välkomnande service, generösa smaker och en miljö där
              det är lika lätt att stanna länge som att titta in spontant.
            </p>
            <p>
              Vi arbetar med råvaror som passar både lunch, middag och kvällshäng, med rätter som
              känns genomtänkta utan att tappa det avslappnade uttrycket.
            </p>
            <p>
              I baren och köket ligger fokus på helheten, så att varje besök ska kännas personligt,
              varmt och värt att komma tillbaka till.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;
