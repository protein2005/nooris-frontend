import React from 'react';
import { Link } from 'react-router-dom';
import './LinkMenu.scss';

function LinkMenu({ category }) {
  return (
    <div className="link-menu">
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
