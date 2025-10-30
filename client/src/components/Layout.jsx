import React from 'react';
import Header from './Header.jsx';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-6xl mx-auto p-4">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;