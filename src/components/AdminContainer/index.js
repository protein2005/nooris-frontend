import React from 'react';
import './Admin.scss';

function AdminContainer({ children }) {
  return (
    <section class="shadow">
      <div class="admin container">{children}</div>
    </section>
  );
}

export default AdminContainer;
