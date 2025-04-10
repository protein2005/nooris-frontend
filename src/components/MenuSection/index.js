import React from 'react';

import foto1 from '../../images/foto1.webp';
import foto2 from '../../images/foto2.webp';

function MenuSection() {
  return (
    <section class="menu shadow">
      <div class="menu__wrapper container">
        <div class="menu__content">
          <h2 class="menu__title">Vår meny</h2>
          <p class="menu__subtitle">ETT AXPLOCK</p>
          <div class="menu__description">
            <p class="fw-600">
              Vår meny har ett helhetsutbud som är anpassat för att alla ska vara nöjda.
            </p>
            <p>
              Vår meny erbjuder något för alla. Vi strävar efter att kunna servera kunderna inte
              bara den bästa maten, utan även en fantastisk service och helhetsupplevelse.
            </p>
          </div>
          <button type="button" class="hero__button">
            LÄS HELA MENYN
          </button>
        </div>
        <div class="menu__images">
          <img
            src={foto1}
            alt="Panelen Steakhouse Luleå mat"
            class="menu__image menu__image--1"
            loading="lazy"
          />
          <img
            src={foto2}
            alt="Panelen Steakhouse Luleå mat"
            class="menu__image menu__image--2"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default MenuSection;
