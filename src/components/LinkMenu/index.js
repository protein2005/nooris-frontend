import React from 'react';
import { Link } from 'react-router-dom';
import './LinkMenu.scss';

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

function LinkMenu({ category, id }) {
  const images = {
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
    <div className="link-menu" style={{ backgroundImage: `url(${images[id]})` }}>
      <div className="link-menu__wrapper">
        <h2 className="link-menu__title">{category.name}</h2>
        <p className="link-menu__description">{category.description}</p>
        <Link className="hero__button" to={category.url}>
          Se meny
        </Link>
      </div>
    </div>
  );
}

export default LinkMenu;
