import React from 'react';
import HeroAdminPanelSection from '../components/HeroAdminPanelSection';
import AdminContainer from '../components/AdminContainer';
import { Helmet } from 'react-helmet-async';
import Cookies from 'js-cookie';
import Login from '../components/Login';
import AdminMenu from '../components/AdminMenu';

function AdminPanel() {
  const token = Cookies.get('token');

  return (
    <>
      <Helmet>
        <title>Admin Panel</title>
        <meta name="description" content="Admin panel for managing the restaurant." />
        <link rel="canonical" href="/admin" />
        <meta property="og:title" content="Admin Panel" />
        <meta property="og:description" content="Admin panel for managing the restaurant." />
        <meta property="og:url" content="/admin" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/path/to/image.jpg" />
        <meta property="og:image:alt" content="Admin Panel Image" />
      </Helmet>
      <HeroAdminPanelSection />
      <AdminContainer>
        {token ? (
          <div>
            <AdminMenu />
            <button
              onClick={() => {
                Cookies.remove('token');
                window.location.href = '/admin';
              }}>
              delete token
            </button>
          </div>
        ) : (
          <Login />
        )}
      </AdminContainer>
    </>
  );
}

export default AdminPanel;
