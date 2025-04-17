import React from 'react';

import MENY from '../../images/menybg.jpg';
import STARTERS from '../../images/Förrätter.jpg';
import MEAT from '../../images/Kött.jpg';
import PASTA from '../../images/Pasta.jpg';
import SMASH_BURGER from '../../images/SmashBurger.jpg';
import FISH from '../../images/Fisk.jpg';
import KEBAB from '../../images/Kebab.jpg';
import SALAD from '../../images/Sallad.jpg';
import PIZZA from '../..//images/Pizza.jpg';
import CHILD_MENU from '../../images/Barnmeny.jpg';
import DESSERT from '../../images/desserter.jpg';
import ALCOHOL from '../../images/Alkohol.jpg';

function HeroMenuSection({ category = 'Meny', id = 'MENY' }) {
  const images = {
    MENY: MENY,
    STARTERS: STARTERS,
    MEAT: MEAT,
    PASTA: PASTA,
    SMASH_BURGER: SMASH_BURGER,
    FISH: FISH,
    KEBAB: KEBAB,
    SALAD: SALAD,
    PIZZA: PIZZA,
    CHILD_MENU: CHILD_MENU,
    DESSERT: DESSERT,
    ALCOHOL: ALCOHOL,
  };

  return (
    <section class="hero__kontakt" style={{ backgroundImage: `url(${images[id]})` }}>
      <div class="hero__overlay">
        <h1 class="kontakt__title">{category}</h1>
      </div>
    </section>
  );
}

export default HeroMenuSection;
