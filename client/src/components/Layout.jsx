<<<<<<< HEAD
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
=======
import React from 'react'
import Header from './Header'

function Layout() {
  return (<>
  <Header/>
  
  </>
  )
}

export default Layout
>>>>>>> 386977098c00456034c0843ce54344935016c99c
