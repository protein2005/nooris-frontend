import React from 'react';
import HeroAdminPanelSection from '../components/HeroAdminPanelSection';
import AdminContainer from '../components/AdminContainer';
import { Helmet } from 'react-helmet-async';
import Cookies from 'js-cookie';
import Login from '../components/Login';
import AdminMenu from '../components/AdminMenu';
import AdminBooking from '../components/AdminBooking';

function AdminPanel() {
  const token = Cookies.get('token');

  return (
    <>
      <Helmet>
        <title>Admin Panel</title>
        <meta name="description" content="Admin panel for managing the restaurant." />
        <link rel="canonical" href="/admin" />
      </Helmet>
      <HeroAdminPanelSection />
      <AdminContainer>
        {token ? (
          <div className="admin__wrapper">
            <AdminBooking />
            <AdminMenu />
          </div>
        ) : (
          <Login />
        )}
      </AdminContainer>
    </>
  );
}

export default AdminPanel;
