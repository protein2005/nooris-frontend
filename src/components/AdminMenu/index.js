import React, { useEffect } from 'react';
import './Menu-admin.scss';
import { getMenu } from '../../utils/http';

function AdminMenu() {
  const [menuItems, setMenuItems] = React.useState([]);

  useEffect(() => {
    getMenu()
      .then((data) => {
        // Сортуємо меню за категоріями
        const sortedMenu = data.reduce((acc, item) => {
          if (!acc[item.category]) {
            acc[item.category] = [];
          }
          acc[item.category].push(item);
          return acc;
        }, {});
        setMenuItems(sortedMenu);
      })
      .catch((error) => {
        console.error('Error fetching menu items:', error);
      });
  }, []);

  return (
    <div className="menu-admin">
      <h2 className="menu-admin__title">Create/Update/Delete items in menu.</h2>
      <div className="menu-admin__wrapper">
        {Object.keys(menuItems).length > 0 ? (
          Object.keys(menuItems).map((category) => (
            <div key={category} className="menu-admin__category">
              <h3>{category}</h3>
              <div className="menu-admin__items">
                {menuItems[category].map((item) => (
                  <div key={item.reference} className="menu-admin__item">
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                    <p>${item.variants[0]?.price}</p> {/* Виводимо ціну першого варіанту */}
                    <button className="menu-admin__button">Edit</button>
                    <button className="menu-admin__button">Delete</button>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>No menu items available.</p>
        )}
      </div>
    </div>
  );
}

export default AdminMenu;
