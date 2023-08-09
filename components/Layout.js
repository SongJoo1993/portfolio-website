import React from 'react';
import MainNavigation from './MainNav';

function Layout({ children }) {
  return (
    <div>
      <MainNavigation />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
