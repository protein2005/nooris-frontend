import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import HeroMenuSection from '../components/HeroMenuSection';
import Spinner from '../components/Spinner';
import './CategoryMenu.scss';
import Cookies from 'js-cookie';

import { menuCategories } from '../utils/menuCategories';
import { getCategoriesItem, createMenuItem, deleteMenuItem, updateMenuItem } from '../utils/http';

function CategoryMenu() {
  const { category } = useParams();
  const [menuItems, setMenuItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [categoryId, setCategoryId] = useState('');
  const [error, setError] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const token = Cookies.get('token');
  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    const categoryData = menuCategories.find((item) => item.url === `/meny/${category}`);
    if (categoryData) {
      setCategoryName(categoryData.name);
      setCategoryId(categoryData.key);
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
    }
  }, [category]);

  const handleSave = async (reference, updatedItem) => {
    try {
      await updateMenuItem(reference, updatedItem, token);
      setMenuItems((prevItems) =>
        prevItems.map((item) => (item.reference === reference ? updatedItem : item)),
      );
      alert('Ändringarna har sparats!');
    } catch (error) {
      alert('Det gick inte att spara ändringarna!');
    }
  };

  const handleDelete = async (reference) => {
    if (!window.confirm('Är du säker på att du vill ta bort det här objektet?')) return;
    try {
      await deleteMenuItem(reference, token);
      setMenuItems((prevItems) => prevItems.filter((item) => item.reference !== reference));
    } catch (error) {
      alert('Det gick inte att ta bort objektet!');
    }
  };

  const handleAddNew = async () => {
    const newItem = {
      name: 'Nytt föremål',
      description: '',
      category: categoryId,
      variants: [{ label: '', price: 100 }],
    };
    try {
      const createdItem = await createMenuItem(newItem, token);
      setMenuItems((prevItems) => [...prevItems, createdItem]);
    } catch (error) {
      alert('Det gick inte att lägga till nytt objekt');
    }
  };

  const handleVariantChange = (itemRef, index, field, value) => {
    setMenuItems((prevItems) =>
      prevItems.map((item) => {
        if (item.reference !== itemRef) return item;
        const updatedVariants = [...item.variants];
        updatedVariants[index] = {
          ...updatedVariants[index],
          [field]: field === 'price' ? Number(value) : value,
        };
        return { ...item, variants: updatedVariants };
      }),
    );
  };

  const addVariant = (itemRef) => {
    setMenuItems((prevItems) =>
      prevItems.map((item) => {
        if (item.reference !== itemRef) return item;
        return {
          ...item,
          variants: [...item.variants, { label: '', price: 0 }],
        };
      }),
    );
  };

  const removeVariant = (itemRef, index) => {
    setMenuItems((prevItems) =>
      prevItems.map((item) => {
        if (item.reference !== itemRef) return item;
        const updatedVariants = [...item.variants];
        updatedVariants.splice(index, 1);
        return { ...item, variants: updatedVariants };
      }),
    );
  };

  return (
    <div>
      <Helmet>
        <title>{categoryName} | Nooris kök & bar</title>
        <meta
          name="description"
          content={`Utforska vårt utbud av ${categoryName.toLowerCase()}-rätter på Nooris kök & bar. Njut av de bästa rätterna inom ${categoryName} för alla smaker.`}
        />
        <meta
          name="keywords"
          content={`${categoryName}, ${categoryName.toLowerCase()} meny, ${categoryName} rätter, restaurangmeny, Nooris kök & bar, boka bord, ${categoryName} mat`}
        />
        <link rel="canonical" href={`https://nooris.nu/meny/${category}`} />
      </Helmet>

      <HeroMenuSection category={categoryName} id={categoryId} />

      <div className="menu-list shadow">
        <div className="menu-list__wrapper container">
          <div className="menu-list__header">
            <h2 className="menu-list__title">{categoryName}</h2>
            {token && (
              <button className="menu-list__edit-toggle" onClick={() => setEditMode(!editMode)}>
                ✏️ {editMode ? 'Att slutföra' : 'Redigera'}
              </button>
            )}
          </div>

          {isLoading && <Spinner />}
          {error && <p>{error}</p>}

          {!isLoading && !error && (
            <ul
              className={`menu-list__items ${
                menuItems.length > 10 ? 'menu-list__items--columns' : ''
              }`}>
              {menuItems.length === 0 && <p className="menu-list__empty">Inga objekt hittades.</p>}
              {menuItems.map((item, index) => (
                <li
                  key={item.reference}
                  className="menu-list__item"
                  style={{ animationDelay: `${index * 0.1}s` }}>
                  {editMode ? (
                    <div className="menu-list__edit-form">
                      <input
                        type="text"
                        placeholder="Namn"
                        value={item.name}
                        onChange={(e) =>
                          setMenuItems((prev) =>
                            prev.map((i) =>
                              i.reference === item.reference ? { ...i, name: e.target.value } : i,
                            ),
                          )
                        }
                      />
                      <textarea
                        value={item.description}
                        placeholder="Beskrivning"
                        onChange={(e) =>
                          setMenuItems((prev) =>
                            prev.map((i) =>
                              i.reference === item.reference
                                ? { ...i, description: e.target.value }
                                : i,
                            ),
                          )
                        }
                      />
                      {item.variants.map((variant, vIndex) => (
                        <div key={vIndex} className="menu-list__variant-row">
                          <input
                            placeholder="Antal gram"
                            value={variant.label}
                            onChange={(e) =>
                              handleVariantChange(item.reference, vIndex, 'label', e.target.value)
                            }
                          />
                          <input
                            type="text"
                            placeholder="Price"
                            value={variant.price}
                            onChange={(e) =>
                              handleVariantChange(item.reference, vIndex, 'price', e.target.value)
                            }
                          />
                          {item.variants.length > 1 && (
                            <button onClick={() => removeVariant(item.reference, vIndex)}>
                              ❌
                            </button>
                          )}
                        </div>
                      ))}
                      <button onClick={() => addVariant(item.reference)}>➕ Version</button>
                      <button onClick={() => handleSave(item.reference, item)}>💾 Spara</button>
                      <button onClick={() => handleDelete(item.reference)}>🗑️ Ta bort</button>
                    </div>
                  ) : (
                    <>
                      {item.variants.length === 1 && !item.variants[0].label ? (
                        <div className="menu-list__row">
                          <h2 className="menu-list__name">{item.name}</h2>
                          <span className="menu-list__price">{item.variants[0].price} :-</span>
                        </div>
                      ) : (
                        <>
                          <h2 className="menu-list__name">{item.name}</h2>
                          <div className="menu-list__row">
                            <span className="menu-list__variants">
                              {item.variants.map((v) => v.label || '').join(' / ')}
                            </span>
                            <span className="menu-list__price">
                              {item.variants.map((v) => `${v.price} kr`).join(' / ')}
                            </span>
                          </div>
                        </>
                      )}
                      {item.description && (
                        <p className="menu-list__description">{item.description}</p>
                      )}
                    </>
                  )}
                </li>
              ))}
            </ul>
          )}

          {editMode && (
            <div className="menu-list__add-button">
              <button onClick={handleAddNew}>➕ Lägg till ett nytt objekt</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CategoryMenu;
