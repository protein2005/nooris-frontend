import React from 'react';

function HeroMenuSection({ category }) {
  return (
    <section class="hero__kontakt">
      <div class="hero__overlay">
        <h1 class="kontakt__title">{category || 'Meny'}</h1>
      </div>
    </section>
  );
}

export default HeroMenuSection;
