import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import HeroMenuSection from '../components/HeroMenuSection';
import Spinner from '../components/Spinner';
import './CategoryMenu.scss';

import { menuCategories } from '../utils/menuCategories';
import { getCategoriesItem } from '../utils/http';

function CategoryMenu() {
  const { category } = useParams();
  const [menuItems, setMenuItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    const categoryData = menuCategories.find((item) => item.url === `/meny/${category}`);
    if (categoryData) {
      setCategoryName(categoryData.name);
      setIsLoading(true);
      getCategoriesItem(categoryData.key)
        .then((data) => {
          setMenuItems(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching menu items:', error);
          setError(error.message);
          setIsLoading(false);
        });
    } else {
      console.error('Category not found:', category);
    }
  }, [category]);

  console.log(menuItems);

  return (
    <div>
      <Helmet>
        <title>{categoryName} | Nooris kök & bar</title>
        <meta name="description" content={`Utforska vår ${category} meny.`} />
      </Helmet>
      <HeroMenuSection category={categoryName} />

      <div className="menu-list shadow">
        {/* <button className="menu-list__back" onClick={() => navigate('/meny')}>
          ← Tillbaka
        </button> */}
        <div className="menu-list__wrapper container">
          <h2 className="menu-list__title">{categoryName}</h2>
          {isLoading && <Spinner />}
          {error && <p>{error}</p>}
          {!isLoading && !error && (
            <ul
              className={`menu-list__items ${
                menuItems.length > 10 ? 'menu-list__items--columns' : ''
              }`}>
              {menuItems.map((item, index) => (
                <li
                  key={item.reference}
                  className="menu-list__item"
                  style={{ animationDelay: `${index * 0.1}s` }}>
                  {item.variants.length === 1 ? (
                    <div className="menu-list__row">
                      <h2 className="menu-list__name">{item.name}</h2>
                      <span className="menu-list__price">{item.variants[0].price} kr</span>
                    </div>
                  ) : (
                    <>
                      <h2 className="menu-list__name">{item.name}</h2>
                      <div className="menu-list__row">
                        <span className="menu-list__variants">
                          {item.variants.map((v) => v.label).join(' / ')}
                        </span>
                        <span className="menu-list__price">
                          {item.variants.map((v) => `${v.price} kr`).join(' / ')}
                        </span>
                      </div>
                    </>
                  )}
                  {item.description && <p className="menu-list__description">{item.description}</p>}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default CategoryMenu;
