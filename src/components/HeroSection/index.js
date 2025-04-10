import React from 'react';
import logo from '../../images/logo.svg';

function HeroSection() {
  return (
    <section class="hero">
      <div class="hero__overlay">
        <div class="hero__content">
          <img
            src={logo}
            alt="Panelen Steakhouse Luleå logotyp"
            class="hero__logo"
            loading="lazy"
          />
          <h2 class="hero__title">VÄLKOMMEN TILL PANELEN LULEÅ</h2>
          <p class="hero__subtitle">Boka bord och njut av en fantastisk matupplevelse.</p>
          <button class="hero__button" aria-label="Boka bord på Panelen Luleå">
            BOKA BORD
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
