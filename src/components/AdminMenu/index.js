import React from 'react';
import './Menu-admin.scss';
import MenuList from '../MenuList';

function AdminMenu() {
  return (
    <div className="menu-admin">
      <h2 className="menu-admin__title">Admin Meny</h2>
      <div className="menu-admin__wrapper">
        <MenuList admin={true} />
      </div>
    </div>
  );
}

export default AdminMenu;
