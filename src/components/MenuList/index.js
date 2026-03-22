import React from 'react';
import './MenuList.scss';
import { menuCategories } from '../../utils/menuCategories';
import LinkMenu from '../LinkMenu';

function MenuList({ admin = false }) {
  return (
    <div className={`menu-categories ${admin ? '' : 'shadow'}`}>
      <div className="menu-categories__header container">
        {admin ? (
          <p className="menu-categories__description">
            Här kan du hantera våra menyer och rätter. Välj en kategori för att fortsätta.
          </p>
        ) : (
          <>
            <h2 className="menu-categories__title">Vår meny</h2>
            <p className="menu-categories__description">
              Här hittar du våra olika kategorier, från mindre rätter till desserter och dryck.
            </p>
          </>
        )}
      </div>
      <div className="menu-categories__wrapper container">
        {menuCategories.map((category) => (
          <LinkMenu key={category.key} id={category.key} category={category} />
        ))}
      </div>
    </div>
  );
}

export default MenuList;
